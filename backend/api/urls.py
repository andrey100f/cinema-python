from django.urls import path

from .view_film import filme_detail, film_detail
from .view_utilizator import utilizatori_detail, login_utilizatori
from .view_rezervare import rezervari_detail

urlpatterns = [
    path('filme/', filme_detail, name='filme_detail'),
    path('filme/<int:pk>', film_detail, name='film_detail'),
    path('users/', utilizatori_detail, name='utilizatori_detail'),
    path('login/', login_utilizatori, name='login_utilizatori'),
    path('rezervari/', rezervari_detail, name='rezervari_detail'),
]

