from django.db import models

class Film(models.Model):
    id = models.AutoField(primary_key=True)
    titlu = models.CharField(max_length=255)
    an_aparitie = models.IntegerField()
    pret_bilet = models.FloatField()
    in_program = models.BooleanField()

class Utilizator(models.Model):
    id = models.AutoField(primary_key=True)
    nume = models.CharField(max_length=255)
    username = models.CharField(max_length=255)
    parola = models.CharField(max_length=255)

class Rezervare(models.Model):
    id = models.AutoField(primary_key=True)
    id_film = models.IntegerField()
    id_utilizator = models.IntegerField()
    data = models.DateField()
