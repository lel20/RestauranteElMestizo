from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Raciones, Entrantes,Caldos, Tipicos, Batidos
import json
# Create your views here.
def raciones(request):
    raciones = Raciones.objects.all()
    data = list(raciones.values())  # Convertir queryset a lista de diccionarios
    return JsonResponse(data, safe=False)
  
def entrantes(request):
    entrantes = Entrantes.objects.all()
    data= list(entrantes.values())
    return JsonResponse(data, safe=False) 

def caldos(request):
    caldos= Caldos.objects.all()
    data=list(caldos.values())
    return JsonResponse(data, safe=False)


def tipicos(request):
    tipicos = Tipicos.objects.all()
    data=list(tipicos.values())
    return  JsonResponse(data, safe=False)

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
