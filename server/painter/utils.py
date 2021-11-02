from django.core.files import File
from io import BytesIO
from PIL import Image
import numpy as np
import cv2

import collections
import os
import natsort
import numbers

import mxnet as mx
import mxnet.ndarray as F

from django.core.files.base import ContentFile
import base64

# URL = 'http://127.0.0.1:8000'
URL = 'http://218.150.183.60:8000'

def base64_to_img(imgstring):
    format, imgstr = imgstring.split(';base64,')  # format ~= data:image/X,
    ext = format.split('/')[-1]  # guess file extension
    return ContentFile(base64.b64decode(imgstr), name='temp.' + ext)

def img_to_opencv(img):
    return cv2.cvtColor(np.array(Image.open(img)), cv2.COLOR_RGB2BGR)

def opencv_to_img(img):
    canvas = Image.fromarray(cv2.cvtColor(img, cv2.COLOR_BGR2RGB))
    blob = BytesIO()
    canvas.save(blob, 'JPEG')
    return File(blob)

def pil_to_file(img):
    blob = BytesIO()
    img.save(blob, 'JPEG')
    return File(blob)

def img_to_PIL(img):
    return Image.open(img)

## input : 웹캠 캡처 사진 opencv 객체
## result : 얼굴 crop 사진 opencv 객체
def run_crop(input):
    print('input shape', input.shape)
    input = cv2.rotate(input, cv2.ROTATE_90_COUNTERCLOCKWISE)
    w = 810
    h = 1080   

    center = input.shape
    x = center[1]/2 - w/2
    y = center[0]/2 - h/2
    result = input[int(y):int(y+h), int(x):int(x+w)]
    print(result.shape)
    return result


## input : 얼굴 crop 사진 opencv 객체
## result : 작품 18개에 대한 결과 opencv 객체 18개 리스트
from .mutils import *
from .runsample import rsevaluate, ctx, evalargs

def run_sample(input):
    
    content_image = tensor_load_rgbimage(input, ctx, size=evalargs.content_size, keep_asp=True)
    result = rsevaluate(content_image)

    return result


## input : 얼굴 crop 사진 opencv 객체
## id : 작품 id
## result : weight다른 결과 opencv 객체 3개 리스트
from .runvariation import rvevaluate

def run_variation(input, id):
    
    result = rvevaluate(input, id)
    # sample1 = cv2.cvtColor(input, cv2.COLOR_BGR2GRAY)
    # sample2 = cv2.cvtColor(input, cv2.COLOR_BGR2RGB)
    # sample3 = cv2.cvtColor(input, cv2.COLOR_BGR2Luv)
    # result = [sample1, sample2, sample3]
    return result


## input : 결과 opencv 객체
## id : 작품 id
## result : 출력화 된 결과 
def run_frame(input, id):
    src2 = input
    # src2 = cv2.imread(input)
    src1 = cv2.imread(f'./painter/logo_frame/frame{id}.png')
    src3 = cv2.imread(f'./painter/images/style1/{id}.jpg')
    max_width = 200
    
    sh, sw, _ = src3.shape
    if sw > sh :
        dsize3 = (200, int(sh/sw*200))
    else:
        dsize3 = (int(sw/sh*200), 200)
    # 1005,1300  1045,1415
    src3 = cv2.copyMakeBorder(src3, 10,10, 10, 10, cv2.BORDER_CONSTANT, value=[0,0,0])
    src2 = cv2.resize(src2, dsize=(1045, 1415), interpolation=cv2.INTER_AREA)
    src3 = cv2.resize(src3, dsize=dsize3, interpolation=cv2.INTER_AREA)

    src2[1415-dsize3[1]:1415,0:dsize3[0]] = src3
    dst = src2
    src1[85:1500,80:1125] = dst
    # 247:1547,100:1105 85:1500,80:1125    
    
    return src1