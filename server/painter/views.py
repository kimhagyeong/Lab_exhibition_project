from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .serializers import *
from .models import Userface, Variation
from .utils import *
# Create your views here.

from PIL import Image
from django.core.files.base import ContentFile

import io
from asgiref.sync import sync_to_async

@sync_to_async
@api_view(['GET', 'POST'])
def create_sample(request):
    if request.method == 'POST':
        data = request.data.copy()
        
        # ####
        # roi_img = Image.open('painter/static/sample.jpg')
        # img_byte_arr = io.BytesIO()
        # roi_img.save(img_byte_arr, format='JPEG')
        # img_byte_arr = img_byte_arr.getvalue()
        # data['img'] = ContentFile(img_byte_arr, 'temp.jpg')
        # ####

        data['img'] = base64_to_img(data['img'])
        
        face_serializer = UserfaceSerializer(data=data)
        if face_serializer.is_valid():
            face_serializer.save()
            face = face_serializer.instance

            crop_face = run_crop(img_to_opencv(face.img))
            face.img.save(f'face_{face.id}.jpg', opencv_to_img(crop_face))
            
            model_output = run_sample(f'./media/{face.img}')
            
            for i, src in enumerate(model_output):
                variation_data = {
                    'source' : i,
                    'face' : face
                }
                variations = Variation(**variation_data)
                variations.save()
                sample = pil_to_file(src)
                variations.sample.save(f'{variations.code}.jpg', sample) 

    face = Userface.objects.last()
    samples = SampleSerializer(face.vars.all(), many=True).data
    
    result_crop = URL + UserfaceSerializer(face).data['img']
    result_data = [URL + s['sample'] for s in samples]

    result = {'crop' : result_crop,
                'data' : result_data}
    return Response(result)

@api_view(['GET'])
def create_variations(request, art_id):
    face = Userface.objects.last()
    main_art = face.vars.filter(source=art_id).first()
    if not main_art.img1:

        ####
        model_input = (img_to_PIL(face.img), art_id)
        model_output = run_variation(*model_input)
        ####
        
        sample = pil_to_file(model_output[0])
        main_art.img1.save(f'{main_art.code}_1.jpg', sample) 
        sample = pil_to_file(model_output[1])
        main_art.img2.save(f'{main_art.code}_2.jpg', sample) 
        sample = pil_to_file(model_output[2])
        main_art.img3.save(f'{main_art.code}_3.jpg', sample) 
    serializer = VariationSerializer(main_art).data
    result = [URL + serializer['sample'], 
                URL + serializer['img1'], 
                URL + serializer['img2'], 
                URL + serializer['img3']]
    return Response(result)

@api_view(['GET'])
def create_printable(request, art_code):
    art_id = art_code//10
    final = art_code%10
    face = Userface.objects.last()
    main_art = face.vars.filter(source=art_id).first()
    if not main_art.print:
        if final == 0:
            input = main_art.sample
        elif final == 1:
            input = main_art.img1
        elif final == 2:
            input = main_art.img2
        elif final == 3:
            input = main_art.img3
        
        # result = run_frame(input.path, art_id)
        result = run_frame(img_to_opencv(input), art_id)
        print = opencv_to_img(result)
        main_art.print.save(f'{main_art.code}_{face.id}.jpg', print) 

    serializer = PrintSerializer(main_art).data
    result = URL+serializer['print']

    return Response(result)