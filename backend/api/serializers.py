from rest_framework import serializers
from .models import Film, Utilizator, Rezervare

class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'

class UtilizatorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Utilizator
        fields = '__all__'

class RezervareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rezervare
        fields = '__all__'
