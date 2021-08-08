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

## input : 웹캠 캡처 사진 opencv 객체
## result : 얼굴 crop 사진 opencv 객체
def run_crop(input):
    

    result = cv2.cvtColor(input, cv2.COLOR_BGR2RGB)
    return result


## input : 얼굴 crop 사진 opencv 객체
## result : 작품 18개에 대한 결과 opencv 객체 18개 리스트
from .mutils import *
from .runsample import *

def run_sample(input):
    
    content_image = tensor_load_rgbimage(input, ctx, size=evalargs.content_size, keep_asp=True)
    result = evaluate(content_image)

    return result


## input : 얼굴 crop 사진 opencv 객체
## id : 작품 id
## result : weight다른 결과 opencv 객체 3개 리스트
def run_variation(input, id):


    sample1 = cv2.cvtColor(input, cv2.COLOR_BGR2GRAY)
    sample2 = cv2.cvtColor(input, cv2.COLOR_BGR2RGB)
    sample3 = cv2.cvtColor(input, cv2.COLOR_BGR2Luv)
    result = [sample1, sample2, sample3]
    return result


## input : 결과 opencv 객체
## id : 작품 id
## result : 출력화 된 결과 
def run_frame(input, id):
    result = cv2.cvtColor(input, cv2.COLOR_BGR2HSV)
    return result