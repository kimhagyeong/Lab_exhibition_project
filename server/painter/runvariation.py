import time
import random
import os
import mxnet as mx  
import numpy as np
np.set_printoptions(precision=2)
from PIL import Image
import re

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

def rvevaluate(args):
    if args.cuda:
        ctx = mx.gpu(0)
        ctx1 = mx.gpu(1)
        ctx2 = mx.gpu(2)
        # ctx3 = mx.gpu(3)
    else:
        ctx = mx.cpu(0)
    # images
    content_image = tensor_load_rgbimage(args.content_image,ctx, size=args.content_size, keep_asp=True)
    content_image1 = tensor_load_rgbimage(args.content_image,ctx1, size=args.content_size, keep_asp=True)
    content_image2 = tensor_load_rgbimage(args.content_image,ctx2, size=args.content_size, keep_asp=True)
    
    style_image = tensor_load_rgbimage(args.style_image, ctx, size=args.style_size)
    style_image1 = tensor_load_rgbimage(args.style_image, ctx1, size=args.style_size)
    style_image2 = tensor_load_rgbimage(args.style_image, ctx2, size=args.style_size)
    
    style_image = preprocess_batch(style_image)
    style_image1 = preprocess_batch(style_image1)
    style_image2 = preprocess_batch(style_image2)
    # model

    style_model = Net(ngf=args.ngf)
    style_model1 = Net(ngf=args.ngf)
    style_model2 = Net(ngf=args.ngf)
    
    style_model.load_params(args.model, ctx=ctx)
    style_model1.load_params('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/models_512_30_10e/Final_epoch_10.params', ctx=ctx1)
    style_model2.load_params('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/models_512_s5/Epoch_3iters_120000.params', ctx=ctx2)

    # forward
    
        # prepare data
        # count += 1
        

    style_model.set_target(style_image)
    style_model1.set_target(style_image1)
    style_model2.set_target(style_image2)

    output = style_model(content_image)
    output1 = style_model1(content_image1)
    output2 = style_model2(content_image2)
        # print(count)
        # print("---------------------------------")
    return [output[0], output1[0], output2[0]]
    utils.tensor_save_bgrimage(output[0], 'final0'+'.jpg', args.cuda)
    utils.tensor_save_bgrimage(output1[0], 'final1'+'.jpg', args.cuda)
    utils.tensor_save_bgrimage(output2[0], 'final2'+'.jpg', args.cuda)


def rvmain():
    # figure out the experiments type
    args = Options().parse()

    if args.subcommand is None:
        raise ValueError("ERROR: specify the experiment type")


    if args.subcommand == 'eval':
        # Test the pre-trained model
        rvevaluate(args)

    else:
        raise ValueError('Unknow experiment type')
    
    

    # # 로고삽입
    
    # output_image

    style_path = os.path.basename(args.style_image)
    num = re.findall('\d+',style_path)
    num = int(num[0])
    

    src2 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/final0.jpg')
    src2_1 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/final1.jpg')
    src2_2 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/final2.jpg')
    
    # frame_image
    src1 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/logo_frame/frame'+'{0}'.format(num)+'.png')
    src1_1 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/logo_frame/frame'+'{0}'.format(num)+'.png')
    src1_2 = cv2.imread('/home/pyj/style/MXNet-Gluon-Style-Transfer-master/logo_frame/frame'+'{0}'.format(num)+'.png')
    

    # src5_1 = cv2.imread('logo_add/dosang1.png')
    # src5_2 = cv2.imread('logo_add/dosang2.png')

    # style_image
    src3 = cv2.imread(args.style_image)
    src3_1 = cv2.imread(args.style_image)
    src3_2 = cv2.imread(args.style_image)

    

    # 여백 주기 위쪽,아래쪽, 왼쪽, 오른쪽
    src3 = cv2.copyMakeBorder(src3, 10,10, 10, 10, cv2.BORDER_CONSTANT, value=[0,0,0])
    src3_1 = cv2.copyMakeBorder(src3, 10,10, 10, 10, cv2.BORDER_CONSTANT, value=[0,0,0])
    src3_2 = cv2.copyMakeBorder(src3, 10,10, 10, 10, cv2.BORDER_CONSTANT, value=[0,0,0])

    src2 = cv2.resize(src2, dsize=(1005, 1300),interpolation=cv2.INTER_AREA)
    src2_1 = cv2.resize(src2_1, dsize=(1005, 1300),interpolation=cv2.INTER_AREA)
    src2_2 = cv2.resize(src2_2, dsize=(1005, 1300),interpolation=cv2.INTER_AREA)
    
    src3 = cv2.resize(src3, dsize=(150, 200),interpolation=cv2.INTER_AREA)
    src3_1 = cv2.resize(src3_1, dsize=(150, 200),interpolation=cv2.INTER_AREA)
    src3_2 = cv2.resize(src3_2, dsize=(150, 200),interpolation=cv2.INTER_AREA)
   

    src2[1100:1300,0:150] = src3
    dst = src2

    src2_1[1100:1300,0:150] = src3_1
    dst1 = src2_1

    src2_2[1100:1300,0:150] = src3_2
    dst2 = src2_2

    src1[247:1547,100:1105] = dst
    src1_1[247:1547,100:1105] = dst1
    src1_2[247:1547,100:1105] = dst2
    # cv2.imwrite('result_w_logo.jpg',src1)
    cv2.imwrite('final_results/final_result0.jpg',src1)
    cv2.imwrite('final_results/final_result1.jpg',src1_1)
    cv2.imwrite('final_results/final_result2.jpg',src1_2)

    cv2.waitKeyEx()
    cv2.destroyAllWindows()


if __name__ == "__main__":
   rvmain()
