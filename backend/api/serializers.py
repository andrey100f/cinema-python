from rest_framework import serializers
from .models import Film, CardClient, Rezervare

class FilmSerializer(serializers.ModelSerializer):
    class Meta:
        model = Film
        fields = '__all__'

class CardClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = CardClient
        fields = '__all__'

class RezervareSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rezervare
        fields = '__all__'
