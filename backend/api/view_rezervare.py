from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Rezervare
from .serializers import RezervareSerializer

@api_view(['GET', 'POST'])
def rezervari_detail(request):
    if request.method == 'GET':
        id_utilizator = request.GET.get('id_utilizator')
        rezervari = Rezervare.objects.all()

        if id_utilizator is not None:
            rezervari = rezervari.filter(id_utilizator=id_utilizator)

        serializer = RezervareSerializer(rezervari, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = RezervareSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
