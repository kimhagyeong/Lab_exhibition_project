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

import cv2,sys

# devices = [gpu(0), gpu(1)]

ctx1 = mx.gpu(1)
ctx2 = mx.gpu(2)
ctx3 = mx.gpu(3)

# model
style_model1 = Net(ngf=128)
style_model2 = Net(ngf=128)
style_model3 = Net(ngf=128)

##style 3
style_model1.load_params('./painter/models_1024_10e/Epoch_6iters_120000.params', ctx=ctx1)
style_model2.load_params('./painter/models_512_30_10e/Final_epoch_10.params', ctx=ctx2)
style_model3.load_params('./painter/models_512_s5/Epoch_3iters_120000.params', ctx=ctx3)

def rvevaluate(input, id):


    # images
    content_image = tensor_load_rgbimage_img(input,ctx1, size=1024, keep_asp=True)
    content_image1 = tensor_load_rgbimage_img(input,ctx2, size=1024, keep_asp=True)
    content_image2 = tensor_load_rgbimage_img(input,ctx3, size=1024, keep_asp=True)
    
    #미리 불러놓고 쓰기
    style_image = tensor_load_rgbimage(f"./painter/images/style1/{id}.jpg", ctx1, size=512)
    style_image1 = tensor_load_rgbimage(f"./painter/images/style1/{id}.jpg", ctx2, size=512)
    style_image2 = tensor_load_rgbimage(f"./painter/images/style1/{id}.jpg", ctx3, size=512)
    style_image = preprocess_batch(style_image)
    style_image1 = preprocess_batch(style_image1)
    style_image2 = preprocess_batch(style_image2)


    style_model1.set_target(style_image)
    style_model2.set_target(style_image1)
    style_model3.set_target(style_image2)

    output = style_model1(content_image)
    output1 = style_model2(content_image1)
    output2 = style_model3(content_image2)
        # print(count)
        # print("---------------------------------")
    return [tensor_save_bgrimage(output[0], 'final0'+'.jpg', 0),
            tensor_save_bgrimage(output1[0], 'final1'+'.jpg', 0),
            tensor_save_bgrimage(output2[0], 'final2'+'.jpg', 0)]