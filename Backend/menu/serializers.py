from rest_framework import serializers
from .models import Raciones, Entrantes, Caldos, Tipicos

class RacionesSerializer(serializers.ModelSerializer):
    # Convertimos el campo _id de MongoDB a un string
    _id = serializers.CharField(read_only=True) 

    class Meta:
        model = Raciones
        fields = ['_id', 'nombre', 'precio', 'imagen', 'disponibilidad']
class EntrantesSerializer(serializers.ModelSerializer):
    # Convertimos el campo _id de MongoDB a un string
    _id = serializers.CharField(read_only=True) 

    class Meta:
        model = Entrantes
        fields = ['_id', 'nombre', 'descripcion','precio', 'imagen', 'disponibilidad', 'nota']

class CaldosSerializer(serializers.ModelSerializer):
    # Convertimos el campo _id de MongoDB a un string
    _id = serializers.CharField(read_only=True) 

    class Meta:
        model = Caldos
        fields = ['_id', 'nombre', 'descripcion','precio', 'imagen', 'disponibilidad', 'nota']

class TipicosSerializer(serializers.ModelSerializer):
    # Convertimos el campo _id de MongoDB a un string
    _id = serializers.CharField(read_only=True) 

    class Meta:
        model = Tipicos
        fields = ['_id', 'nombre', 'descripcion','precio', 'imagen', 'disponibilidad', 'nota']