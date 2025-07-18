from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser


from rest_framework import generics
from .models import (
    Entrantes, 
    Raciones,
    Tipicos, 
    Ensaladas,
    Sopas)
from .serializers import (
    EntrantesSerializer, 
    RacionesSerializer, 
    TipicosSerializer, 
    EnsaladasSerializer,
    SopasSerializer)


#------------------------- RACIONES --------------------
class Home(APIView):
    def get(self, request):
        return Response({'mensaje':'Bienvenido'})

class VisualizarRaciones(generics.ListCreateAPIView):
    queryset= Raciones.objects.all()
    serializer_class= RacionesSerializer

#------------------------- ENTRANTES -------------------
class VisualizarEntrantes(generics.ListCreateAPIView):
    queryset=Entrantes.objects.all()
    serializer_class=EntrantesSerializer
    parser_classes=[MultiPartParser, FormParser]
#-------------------------- Sopas ----------------------
class ListarCrearSopas(generics.ListCreateAPIView):
    queryset=Sopas.objects.all()
    serializer_class=SopasSerializer
    parser_classes=[MultiPartParser, FormParser]
#-------------------------- Platos Típicos--------------

class ListarCrearEnsaladas(generics.ListCreateAPIView):
    queryset=Ensaladas.objects.all()
    serializer_class=EnsaladasSerializer
    parser_classes=[MultiPartParser, FormParser]

class ListarCrearTipicos(generics.ListCreateAPIView):
    queryset=Tipicos.objects.all()
    serializer_class=TipicosSerializer
    parser_classes = [MultiPartParser, FormParser]  # Necesario para manejar imágenes