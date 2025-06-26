from rest_framework import generics
from .models import Entrantes, Raciones
from .serializers import EntrantesSerializer, RacionesSerializer


#------------------------- RACIONES --------------------
class VisualizarRaciones(generics.ListCreateAPIView):
    queryset= Raciones.objects.all()
    serializer_class= RacionesSerializer

#------------------------- ENTRANTES -------------------
class VisualizarEntrantes(generics.ListCreateAPIView):
    queryset=Entrantes.objects.all()
    serializer_class=EntrantesSerializer