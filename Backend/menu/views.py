from django.shortcuts import render
from django.http import JsonResponse
from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from .models import Entrantes
import json
# Create your views here.
def index(request):
    entrantes = Entrantes.objects.all()
    return render(request, 'index.html', {'entrantes': entrantes})
    
def test_db_connection(request):
    try:
        Entrantes.objects.exists()
        return HttpResponse("Conexión a la base de datos exitosa!")
    except Exception as e:
        return HttpResponse(f"Error al conectar a la base de datos: {str(e)}")