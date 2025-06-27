from rest_framework import generics
from .models import Entrantes, Raciones,Tipicos, Sopas
from .serializers import EntrantesSerializer, RacionesSerializer, TipicosSerializer, SopasSerializer


#------------------------- RACIONES --------------------
class VisualizarRaciones(generics.ListCreateAPIView):
    queryset= Raciones.objects.all()
    serializer_class= RacionesSerializer

#------------------------- ENTRANTES -------------------
class VisualizarEntrantes(generics.ListCreateAPIView):
    queryset=Entrantes.objects.all()
    serializer_class=EntrantesSerializer
#-------------------------- Sopas ----------------------
class ListarCrearSopas(generics.ListCreateAPIView):
    queryset=Sopas.objects.all()
    serializer_class=SopasSerializer
#-------------------------- Platos Típicos--------------

class ListarCrearTipicos(generics.ListCreateAPIView):
    queryset=Tipicos.objects.all()
    serializer_class=TipicosSerializer