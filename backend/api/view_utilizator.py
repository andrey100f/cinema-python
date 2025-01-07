from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Utilizator
from .serializers import UtilizatorSerializer

@api_view(['GET', 'POST'])
def utilizatori_detail(request):
    if request.method == 'GET':
        utilizatori = Utilizator.objects.all()
        serializer = UtilizatorSerializer(utilizatori, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UtilizatorSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def login_utilizatori(request):
    username = request.data.get('username', None)
    parola = request.data.get('parola', None)

    try:
        utilizator = Utilizator.objects.get(username=username, parola=parola)
        serializer = UtilizatorSerializer(utilizator)

        return Response(serializer.data)  

    except Utilizator.DoesNotExist:
        return Response(
            {"error": "Utilizatorul nu a fost găsit"}, 
            status=status.HTTP_404_NOT_FOUND
        )