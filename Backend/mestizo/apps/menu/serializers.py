from rest_framework import serializers
from .models import Entrantes, Raciones

#Este serializer se utiliza para convertir dados de una base de datos (objetos) a formato JSON
class RacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Raciones
        fields=['nombre','precio','disponibilidad', 'fecha_creacion']

class EntrantesSerializer(serializers.ModelSerializer):
    class Meta:
        #La clase interna Meta sirve para idicar al serializador con que modelo de va a trabajar y que campos se deben incluir al momento de hacer la conversión a JSON
        model=Entrantes
        fields=['nombre','precio','descripcion', 'disponibilidad']