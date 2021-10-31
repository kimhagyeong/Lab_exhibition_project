from django.urls import path
from . import views

urlpatterns = [
    path('cs', views.create_sample, name = "create_sample"),
    path('cv/<int:art_id>', views.create_variations, name = "create_variations"),
    path('cp/<int:art_code>', views.create_printable, name = "create_printable"),
    path('sample', views.view_sample, name = "sample"),
]