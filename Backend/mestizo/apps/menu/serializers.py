from rest_framework import serializers
from .models import Entrantes
class EntrantesSerializer(serializers.ModelSerializer):
    
    class Meta:
        model=Entrantes
        fields=['nombre','precio','descripcion', 'disponibilidad']