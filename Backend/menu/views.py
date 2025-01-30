from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Raciones, Entrantes,Caldos, Tipicos, Batidos
import json
from .serializers import RacionesSerializer, EntrantesSerializer, CaldosSerializer, TipicosSerializer
# Create your views here.
class raciones(APIView):
    def get(self, request):
        # Obtener todos los objetos Raciones
        raciones = Raciones.objects.all()
        
        # Serializar los datos usando nuestro serializador
        serializer = RacionesSerializer(raciones, many=True)
        
        # Retornar los datos serializados como una respuesta JSON
        return Response(serializer.data)
    
  
class entrantes(APIView):
    def get(self, request):
        entrantes = Entrantes.objects.all()
        serializer = EntrantesSerializer(entrantes, many=True)
        return Response(serializer.data) 

class caldos(APIView):
    def get(self, request):
        caldos= Caldos.objects.all()
        serializer= CaldosSerializer(caldos, many=True)
        return Response(serializer.data)


class tipicos(APIView):
    def get(self, request):
        tipicos = Tipicos.objects.all()
        serealizer=TipicosSerializer(tipicos,many=True)
        return Response(serealizer.data)

def batidos(request):
    batidos = Batidos.objects.all()
    data=list(batidos.values())
    return  JsonResponse(data, safe=False)

def test_db_connection(request):
    try:
        Entrantes.objects.exists()
        return HttpResponse("Conexión a la base de datos exitosa!")
    except Exception as e:
        return HttpResponse(f"Error al conectar a la base de datos: {str(e)}")
