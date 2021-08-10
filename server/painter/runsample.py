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
    style_image = preprocess_batch(style_image) ##add

    style_imgs.append(preprocess_batch(style_image))


def rsevaluate(content_image):
    result = []
    count = 0
    for batch_id, (x, _) in enumerate(test_loader): 
        style_model.set_target(style_imgs[batch_id])
        output = style_model(content_image)
        result.append(tensor_save_bgrimage(output[0], 'ouput' + '{0}'.format(batch_id)+'.jpg', evalargs.cuda))
    return result


    # # 로고삽입
    for i in range(0,18):
        # output_image
        src2 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/ouput'+'{0}'.format(i)+'.jpg')

        # frame_image
        src1 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/logo_frame/frame'+'{0}'.format(i)+'.png')

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
