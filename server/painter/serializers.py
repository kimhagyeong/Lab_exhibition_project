from rest_framework import serializers 
from .models import Userface, Variation

class UserfaceSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Userface
        fields = ['img',]

class VariationSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Variation
        fields = '__all__'

class SampleSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Variation
        fields = ('sample',)

class PrintSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = Variation
        fields = ('print',)