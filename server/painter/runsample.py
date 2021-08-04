import time
import random
import os
import mxnet as mx  
import numpy as np
np.set_printoptions(precision=2)
from PIL import Image

from mxnet import autograd, gluon, gpu
from mxnet.gluon import nn, Block, HybridBlock, Parameter, ParameterDict
import mxnet.ndarray as F

from .net import *
from .mutils import *
from .option import Options
from .data import *

import cv2,dlib, sys
from facenet_pytorch import MTCNN, InceptionResnetV1
import torch

# devices = [gpu(0), gpu(1)]

def train(args):
    np.random.seed(args.seed)
    # ctx = mx.cpu(0)
    if args.cuda:
        ctx = mx.gpu(0)
        # ctx = ctx + [mx.gpu(i) for i in _get_gpus()]
    else:
        ctx = mx.cpu(0)
    # dataloader
    transform = Compose([Scale(args.image_size),
                               CenterCrop(args.image_size),
                               ToTensor(ctx),
                               ])
    train_dataset =ImageFolder(args.dataset, transform)
    train_loader = gluon.data.DataLoader(train_dataset, batch_size=args.batch_size,
                                         last_batch='discard')
    style_loader = StyleLoader(args.style_folder, args.style_size, ctx=ctx)
    print('len(style_loader):',style_loader.size())
    # models
    vgg =Vgg16()
    init_vgg_params(vgg, 'models', ctx=ctx)
    style_model =Net(ngf=args.ngf)
    style_model.initialize(init=mx.initializer.MSRAPrelu(), ctx=ctx)
    if args.resume is not None:
        print('Resuming, initializing using weight from {}.'.format(args.resume))
        style_model.load_params(args.resume, ctx=ctx)
    print('style_model:',style_model)
    # optimizer and loss
    trainer = gluon.Trainer(style_model.collect_params(), 'adam',
                            {'learning_rate': args.lr})
    mse_loss = gluon.loss.L2Loss()

    for e in range(args.epochs):
        agg_content_loss = 0.
        agg_style_loss = 0.
        count = 0
        for batch_id, (x, _) in enumerate(train_loader):
            n_batch = len(x)
            count += n_batch
            # prepare data
            style_image = style_loader.get(batch_id)
            style_v = subtract_imagenet_mean_preprocess_batch(style_image.copy())
            style_image = preprocess_batch(style_image)

            features_style = vgg(style_v)
            gram_style = [gram_matrix(y) for y in features_style]

            xc = subtract_imagenet_mean_preprocess_batch(x.copy())
            f_xc_c = vgg(xc)[1]
            with autograd.record():
                style_model.set_target(style_image)
                y = style_model(x)

                y = subtract_imagenet_mean_batch(y)
                features_y = vgg(y)

                content_loss = 2 * args.content_weight * mse_loss(features_y[1], f_xc_c)

                style_loss = 0.
                for m in range(len(features_y)):
                    gram_y =gram_matrix(features_y[m])
                    _, C, _ = gram_style[m].shape
                    gram_s = F.expand_dims(gram_style[m], 0).broadcast_to((args.batch_size, 1, C, C))
                    style_loss = style_loss + 2 * args.style_weight * \
                        mse_loss(gram_y, gram_s[:n_batch, :, :])

                total_loss = content_loss + style_loss
                total_loss.backward()

            trainer.step(args.batch_size)
            mx.nd.waitall()

            agg_content_loss += content_loss[0]
            agg_style_loss += style_loss[0]

            if (batch_id + 1) % args.log_interval == 0:
                mesg = "{}\tEpoch {}:\t[{}/{}]\tcontent: {:.3f}\tstyle: {:.3f}\ttotal: {:.3f}".format(
                    time.ctime(), e + 1, count, len(train_dataset),
                                agg_content_loss.asnumpy()[0] / (batch_id + 1),
                                agg_style_loss.asnumpy()[0] / (batch_id + 1),
                                (agg_content_loss + agg_style_loss).asnumpy()[0] / (batch_id + 1)
                )
                print(mesg)


            if (batch_id + 1) % (12 * args.log_interval) == 0:
                # save model
                # save_model_filename = "Epoch_" + str(e) + "iters_" + \
                #     str(count) + "_" + str(time.ctime()).replace(' ', '_') + "_" + str(
                #     args.content_weight) + "_" + str(args.style_weight) + ".params"
                save_model_filename = "Epoch_" + str(e) + "iters_" + \
                    str(count) + ".params"
                save_model_path = os.path.join(args.save_model_dir, save_model_filename)
                style_model.save_params(save_model_path)
                print("\nCheckpoint, trained model saved at", save_model_path)

    # save model
    save_model_filename = "Final_epoch_" + str(args.epochs) + ".params"
    save_model_path = os.path.join(args.save_model_dir, save_model_filename)
    style_model.save_params(save_model_path)
    print("\nDone, trained model saved at", save_model_path)


evalargs = Options().parse('eval --content-image ./painter/images/content/yong.jpg'.split())

if evalargs.cuda:
    ctx = mx.gpu(0)

else:
    ctx = mx.cpu(0)
# images


transform = Compose([Scale(512),
                            CenterCrop(512),
                            ToTensor(ctx),
                            ])
test_dataset =ImageFolder(evalargs.style_list, transform)
test_loader = gluon.data.DataLoader(test_dataset, batch_size=1,shuffle=False)
                                    #  last_batch='discard')
style_loader = StyleLoader(evalargs.style_folder, evalargs.style_size, ctx=ctx)

style_model =Net(ngf=evalargs.ngf)

style_model.load_params(evalargs.model, ctx=ctx)

style_imgs = []
for batch_id, (x, _) in enumerate(test_loader): 

    style_image = style_loader.get(batch_id)

    style_imgs.append(preprocess_batch(style_image))


def evaluate(content_image):
    result = []
    count = 0
    for batch_id, (x, _) in enumerate(test_loader): 
        style_model.set_target(style_imgs[batch_id])
        output = style_model(content_image)
        result.append(tensor_save_bgrimage(output[0], 'ouput' + '{0}'.format(batch_id)+'.jpg', evalargs.cuda))
    return result


def optimize(args):
    """    Gatys et al. CVPR 2017
    ref: Image Style Transfer Using Convolutional Neural Networks
    """
    if args.cuda:
        ctx = mx.gpu(2)
    else:
        ctx = mx.cpu(0)
    # load the content and style target
    content_image = tensor_load_rgbimage(args.content_image,ctx, size=args.content_size, keep_asp=True)
    content_image = subtract_imagenet_mean_preprocess_batch(content_image)
    style_image = tensor_load_rgbimage(args.style_image, ctx, size=args.style_size)
    style_image = subtract_imagenet_mean_preprocess_batch(style_image)
    # load the pre-trained vgg-16 and extract features
    vgg =Vgg16()
    init_vgg_params(vgg, 'models', ctx=ctx)
    # content feature
    f_xc_c = vgg(content_image)[1]
    # style feature
    features_style = vgg(style_image)
    gram_style = [gram_matrix(y) for y in features_style]
    # output
    output = Parameter('output', shape=content_image.shape)
    output.initialize(ctx=ctx)
    output.set_data(content_image)
    # optimizer
    trainer = gluon.Trainer([output], 'adam',
                            {'learning_rate': args.lr})
    mse_loss = gluon.loss.L2Loss()

    cnt = 0
    # optimizing the images
    for e in range(args.iters):
        imagenet_clamp_batch(output.data(), 0, 255)
        # fix BN for pre-trained vgg
        with autograd.record():
            features_y = vgg(output.data())
            content_loss = 2 * args.content_weight * mse_loss(features_y[1], f_xc_c)
            style_loss = 0.
            for m in range(len(features_y)):
                gram_y =gram_matrix(features_y[m])
                gram_s = gram_style[m]
                style_loss = style_loss + 2 * args.style_weight * mse_loss(gram_y, gram_s)
            total_loss = content_loss + style_loss
            total_loss.backward()

        trainer.step(1)
        if (e + 1) % args.log_interval == 0:
            print('loss:{:.2f}'.format(total_loss.asnumpy()[0]))
        cnt += 1

        # save image
        # if cnt <= 100:
        #     if cnt % 1 == 0:
        #         output0 = add_imagenet_mean_batch(output.data())
        #         tensor_save_bgrimage(output0[0], args.output_image + '{0}.jpg'.format(cnt), args.cuda)
        
    # save the image
    output = add_imagenet_mean_batch(output.data())
    tensor_save_bgrimage(output[0], args.output_image, args.cuda)


def main():
    # figure out the experiments type
    args = Options().parse()

    if args.subcommand is None:
        raise ValueError("ERROR: specify the experiment type")

    if args.subcommand == "train":
        # Training the model
        train(args)

    elif args.subcommand == 'eval':
        # Test the pre-trained model
        evaluate(args)

    elif args.subcommand == 'optim':
        # Gatys et al. using optimization-based approach
        optimize(args)

    else:
        raise ValueError('Unknow experiment type')
    
    
    # #  배경 얼굴인식
    # mtcnn = MTCNN(device=torch.device('cpu'))
    # image = cv2.imread('images/content/joochan.jpg')

    # # 얼굴 이미지 resize 필요
    # image = cv2.resize(image, dsize=(122,140),interpolation=cv2.INTER_AREA)
    # cv2.imwrite('images/content/resize_image.jpg',image)
    
    # image = Image.open('images/content/resize_image.jpg')

    

    # boxes, probs = mtcnn.detect(image)
    
    # box_x1 = int(boxes[0][0]) # x1
    # box_y1 = int(boxes[0][1]) # y1
    # box_x2 = int(boxes[0][2]) # x2
    # box_y2 = int(boxes[0][3]) # y2
    
    # # # y기준으로 반지름
    # center_x = int((box_x2+box_x1)/2)
    # center_y = int((box_y2+box_y1)/2)
    # radian = box_x2 - center_x
    # # radian = 313
    # # print(radian)
    # # exit()
    # # x기준으로 반지름
    # # center_x = int((box_x2+box_x1)/2)
    # # center_y = int((box_y2+box_y1)/2)
    # # radian = box_x2 - center_x


    # img = cv2.imread('images/content/resize_image.jpg')
    # img = cv2.resize(img, dsize=(122,140),interpolation=cv2.INTER_AREA)
    # # img = cv2.rectangle(img, (box_x1, box_y1), (box_x2, box_y2), (0,255,0), 3)
    # # cv2.imwrite('face_image/test.jpg',img)
    # # exit()

    # # 사각형 얼굴 crop
    # # face_image = img[box_y1:box_y2,box_x1:box_x2]

    # # 원 그리기
    # # face_image = cv2.circle(img,(center_x,center_y), radian, (0,0,255), 3)

    # # cv2.imwrite('face_image/face_center_y.jpg',face_image)

    # # 원형 얼굴 crop 하기
    # w0 = img.shape[0]
    # h0 = img.shape[1]

    # gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    # mask = np.zeros((w0,h0),dtype=np.uint8)
    # cv2.circle(mask,(center_x,center_y),radian,(255,255,255),-1,8,0)

    # # 얼굴 원으로 배경은 검정
    # face_only = cv2.bitwise_and(img,img,mask=mask)
    # face_only = face_only[int(center_y-radian-10):int(center_y+radian+10),int(center_x-radian-10):int(center_x+radian+10)]


    # cv2.imwrite('face_image/face_circle.jpg',face_only)
    # # exit()
    
    # # 배경이미지에 얼굴 입히기
    # face_cir = cv2.imread('face_image/face_circle.jpg')
    # bg = cv2.imread('free.png')



    # # free 얼굴 검출
    # mtcnn = MTCNN(device=torch.device('cpu'))
    # image = Image.open('free.png')
    # boxes, probs = mtcnn.detect(image)
    
    # box_x1 = int(boxes[0][0]) # x1
    # box_y1 = int(boxes[0][1]) # y1
    # box_x2 = int(boxes[0][2]) # x2
    # box_y2 = int(boxes[0][3]) # y2

    # fcenter_x = int((box_x1+box_x2)/2)
    # fcenter_y = int((box_y1+box_y2)/2)

    
    # # img = cv2.imread('free.png')


    # # img = cv2.rectangle(img, (box_x1, box_y1), (box_x2, box_y2), (0,255,0), 3)
    # # cv2.imwrite('free_face.jpg',img)
    # # exit()

    # # free 사각형 얼굴 crop
    # # free_face = image[box_y1:box_y2,box_x1:box_x2]


    # # 얼굴 입히기

    # face_cir = cv2.resize(face_cir, dsize=(0,0),fx=1, fy=1,interpolation=cv2.INTER_AREA)

    # rows, cols, channels = face_cir.shape
   
    # center_row = int(rows/2)
    # center_col = int(cols/2)
    
    # gray = cv2.cvtColor(face_cir, cv2.COLOR_BGR2GRAY)

    # roi = bg[fcenter_y-center_row:fcenter_y+center_row,fcenter_x-center_col:fcenter_x+center_col]

    # # cv2.imwrite('roi.jpg',roi)
    # # exit()

    # ret, mask = cv2.threshold(gray, 1, 255, cv2.THRESH_BINARY)
   
    # mask_inv = cv2.bitwise_not(mask)

    # bg_bg = cv2.bitwise_and(roi,roi,mask=mask_inv)
    # face_bg = cv2.bitwise_and(face_cir,face_cir,mask=mask)

    # dst = cv2.bitwise_or(bg_bg, face_bg)

    

    # bg[fcenter_y-center_row:fcenter_y+center_row,fcenter_x-center_col:fcenter_x+center_col] = dst
    # cv2.imwrite('face_bg.jpg',bg)

    # exit()

    # # 로고삽입
    for i in range(0,18):
        # output_image
        src2 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/ouput'+'{0}'.format(i)+'.jpg')
        # src2_1 = cv2.imread('logo_add/output.jpg1.jpg')
        # src2_2 = cv2.imread('logo_add/output.jpg2.jpg')

        # frame_image
        src1 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/logo_frame/frame'+'{0}'.format(i)+'.png')
        # src1_1 = cv2.imread('logo_add/logo_frame.png')
        # src1_2 = cv2.imread('logo_add/logo_frame.png')

        # src5_1 = cv2.imread('logo_add/dosang1.png')
        # src5_2 = cv2.imread('logo_add/dosang2.png')

        # style_image
        src3 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/images/style1/'+'{0}'.format(i)+'.jpg')
        # src3_1 = cv2.imread(args.style_image+'_2.jpg')
        # src3_2 = cv2.imread(args.style_image+'_3.jpg')

        

        # 여백 주기 위쪽,아래쪽, 왼쪽, 오른쪽
        src3 = cv2.copyMakeBorder(src3, 10,10, 10, 10, cv2.BORDER_CONSTANT, value=[0,0,0])

        src2 = cv2.resize(src2, dsize=(1005, 1300),interpolation=cv2.INTER_AREA)
        # src2_1 = cv2.resize(src2_1, dsize=(1050, 1400),interpolation=cv2.INTER_AREA)
        # src2_2 = cv2.resize(src2_2, dsize=(1050, 1400),interpolation=cv2.INTER_AREA)
        
        src3 = cv2.resize(src3, dsize=(150, 200),interpolation=cv2.INTER_AREA)
        # src3_1 = cv2.resize(src3_1, dsize=(150, 200),interpolation=cv2.INTER_AREA)
        # src3_2 = cv2.resize(src3_2, dsize=(150, 200),interpolation=cv2.INTER_AREA)
        # src2 = cv2.resize(src2, dsize=(400, 600),interpolation=cv2.INTER_AREA)
        # src1 = cv2.resize(src1, dsize=(600, 900),interpolation=cv2.INTER_AREA)
        
        # src5_1 = cv2.resize(src5_1, dsize=(150,150),interpolation=cv2.INTER_AREA)
        # src5_2 = cv2.resize(src5_2, dsize=(50, 50),interpolation=cv2.INTER_AREA)

        # src2_2[1215:1365,875:1025]=src5_1
        # src2 = cv2.resize(src2,dsize = ,fx=1,fy=1,interpolation=cv2.INTER_AREA)
        # src2 = cv2.resize(src2, dsize=(208, 70),fx=1,fy=1,interpolation=cv2.INTER_AREA)
        # 222, 84
        rows, cols, channels = src2.shape
        rows1, cols1, channels1 = src1.shape

        # print(src1.shape)
        # print(src2.shape)
        # exit()

        # roi = src1[rows-rows:rows1,cols1-cols:cols1]
        
        # roi = src1[200:1600,75:1125]
        
        # gray = cv2.cvtColor(src2, cv2.COLOR_BGR2GRAY)
        # ret, mask = cv2.threshold(gray, 160, 255, cv2.THRESH_BINARY)
        
        # mask_inv = cv2.bitwise_not(mask)
        
        # src1_bg = cv2.bitwise_and(roi,roi,mask=mask)
        

        # src2_fg = cv2.bitwise_and(src2,src2,mask=mask_inv)
        
        # dst = cv2.bitwise_or(src1_bg, src2_fg)
        
        # src1[rows1-rows:rows1,cols1-cols:cols1] = dst

        src2[1100:1300,0:150] = src3
        dst = src2

        # src2_1[0:200,900:1050] = src3_1
        # dst1 = src2_1

        # src2_2[0:200,900:1050] = src3_2
        # dst2 = src2_2

        src1[247:1547,100:1105] = dst
        # src1_1[200:1600,75:1125] = dst1
        # src1_2[200:1600,75:1125] = dst2
        # cv2.imwrite('result_w_logo.jpg',src1)
        cv2.imwrite('final_results/result'+'{0}'.format(i)+'.jpg',src1)
        # cv2.imwrite('result_w_logo1.jpg',src1_1)
        # cv2.imwrite('result_w_logo2.jpg',src1_2)

    cv2.waitKeyEx()
    cv2.destroyAllWindows()


if __name__ == "__main__":
   main()
