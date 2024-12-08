from django.urls import path

from .views import filme_detail, film_detail

urlpatterns = [
    path('filme/', filme_detail, name='filme_detail'),
    path('filme/<int:pk>', film_detail, name='film_detail')
]