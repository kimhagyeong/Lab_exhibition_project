from django.db import models
from django.conf import settings
import os
# Create your models here.

class Userface(models.Model):
    img = models.ImageField(upload_to = 'users/')

    def __str__(self):
        return str(self.id)

class Variation(models.Model):
    arts =  ( "리듬들(1934)",
                "삶의 기쁨(1930)",
                "무한리듬(1934)" ,
                "가죽나막신(1888)",
                "밤의 카페 테라스(1888)" ,
                "별이 빛나는 밤에(1889)",
                "뮤직(1904)" ,
                "채링 크로스 다리(1906)",
                "콜리우르의 보트들(1905)",
                "비관론과 낙관론(1923)",
                "원형 비행기(1924)",
                "불꽃놀이(1917)",
                "뉴욕(1913)",
                "성직자(1913)",
                "우드니(젊은미국소녀)(1913)",
                "거울 앞 소녀(1932)",
                "자화상(1901)",
                "la muse(1935)")
    artists = ("로베르 들로네","반 고흐","앙드레 드랭",
                "자코모 발라","프란시스 피카비아","피카소")

    class Source(models.IntegerChoices):
        ROV1 =0
        ROV2 =1
        ROV3 =2
        VAN1 =3
        VAN2 =4
        VAN3 =5
        AND1 =6
        AND2 =7
        AND3 =8
        JAK1 =9
        JAK2 =10
        JAK3 =11
        FRN1 =12
        FRN2 =13
        FRN3 =14
        PIC1 =15
        PIC2 =16
        PIC3 =17

    source = models.IntegerField(choices=Source.choices)

    sample = models.ImageField(upload_to = 'images/')
    img1 = models.ImageField(upload_to = 'images/', null=True, default=None)
    img2 = models.ImageField(upload_to = 'images/', null=True, default=None)
    img3 = models.ImageField(upload_to = 'images/', null=True, default=None)
    face = models.ForeignKey(Userface, on_delete=models.CASCADE, related_name='vars')
    print = models.ImageField(upload_to = 'print/', null=True, default=None)

    @property
    def code(self):
        return f'{self.face}_{self.source}'

    def __str__(self):
        return f'{self.artists[(self.source-1)//3]}_{self.arts[self.source-1]}_{self.face}'

    def delete(self, *args, **kargs):
        if self.sample:
            os.remove(os.path.join(settings.MEDIA_ROOT, self.sample.path))
        if self.img1:
            os.remove(os.path.join(settings.MEDIA_ROOT, self.img1.path))
        if self.img2:
            os.remove(os.path.join(settings.MEDIA_ROOT, self.img2.path))
        if self.img3:
            os.remove(os.path.join(settings.MEDIA_ROOT, self.img3.path))
        super(Variation, self).delete(*args, **kargs)