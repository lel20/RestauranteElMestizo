from rest_framework import generics
from .models import Entrantes
from .serializers import EntrantesSerializer


class VisualizarEntrantes(generics.ListCreateAPIView):
    queryset=Entrantes.objects.all()
    serializer_class=EntrantesSerializer