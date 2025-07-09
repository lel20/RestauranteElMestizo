from rest_framework import serializers
from .models import Entrantes, Raciones, Sopas,Tipicos,Ensaladas

#Este serializer se utiliza para convertir dados de una base de datos (objetos) a formato JSON
class RacionesSerializer(serializers.ModelSerializer):
    class Meta:
        model=Raciones
        fields=['id','nombre','precio','disponibilidad', 'fecha_creacion']

class EntrantesSerializer(serializers.ModelSerializer):
    class Meta:
        #La clase interna Meta sirve para idicar al serializador con que modelo de va a trabajar y que campos se deben incluir al momento de hacer la conversión a JSON
        model=Entrantes
        fields=['id','nombre','precio','descripcion','imagen', 'disponibilidad',"fecha_creacion"]

class SopasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Sopas
        fields=['id',"nombre","precio","descripcion","imagen","disponibilidad","fecha_creacion"]

class EnsaladasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Ensaladas
        fields=["id","nombre","precio", "descripcion","imagen","disponibilidad","fecha_creacion"]

class TipicosSerializer(serializers.ModelSerializer):
    class Meta:
        model=Tipicos
        fields=['id','nombre',"precio","imagen","descripcion","disponibilidad", "fecha_creacion"]