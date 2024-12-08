from django.db import models

# Create your models here.

# film: id, titlu, an apariție, preț bilet, în program. Prețul să fie strict pozitiv.
class Film(models.Model):
    id = models.AutoField(primary_key=True)
    titlu = models.CharField(max_length=255)
    an_aparitie = models.IntegerField()
    pret_bilet = models.FloatField()
    in_program = models.BooleanField()

# card_client: id, nume, prenume, CNP, data nașterii (dd.mm.yyyy), data înregistrării (d.mm.yyyy), puncte acumulate. CNP-ul trebuie să fie unic.
class CardClient(models.Model):
    id = models.AutoField(primary_key=True)
    nume = models.CharField(max_length=255)
    prenume = models.CharField(max_length=255)
    cnp = models.CharField(max_length=255)
    data_nasterii = models.DateField()
    data_inregistrarii = models.DateField()
    puncte_acumulate = models.IntegerField()

# rezervare: id, id_film, id_card_client (poate fi nul), data
class Rezervare(models.Model):
    id = models.AutoField(primary_key=True)
    id_film = models.IntegerField()
    id_card_client = models.IntegerField()
    data = models.DateField()
