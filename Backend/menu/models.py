# Create your models here.
from djongo import models
class Raciones(models.Model):
  nombre = models.CharField(max_length=20)
  precio = models.DecimalField(max_digits=5, decimal_places=2)
  imagen = models.URLField(blank=True)  # Campo para almacenar la URL de la imagen
  disponibilidad = models.CharField(max_length=5)
    
  def __str__(self):
    return self.nombre


class Entrantes(models.Model):
  nombre = models.CharField(max_length = 20)
  precio = models.DecimalField(max_digits = 5, decimal_places = 2)
  descripcion = models.CharField(max_length = 100)
  disponibilidad= models.CharField(max_length = 5)
  imagen = models.URLField(blank=True)
  nota= models.CharField(max_length=100)
  
  def __str__(self):
    return self.nombre
  
class Caldos(models.Model):
  nombre= models.CharField(max_length=20)
  precio=models.DecimalField(max_digits=5, decimal_places=2)
  descripcion= models.Field(max_length=100)
  disponibilidad= models.CharField(max_length=5)
  imagen=models.URLField(blank=True)
  nota=models.CharField(max_length=100)
  
  def __str__(self):
    return self.nombre


class Tipicos(models.Model):
  nombre = models.CharField(max_length=20)
  precio = models.DecimalField(max_digits=5, decimal_places=2) 
  imagen = models.URLField(blank=True)
  descripcion = models.CharField(max_length=100)
  disponibilidad = models.CharField(max_length=5) 
  nota = models.CharField(max_length=50)
  
  def __str__(self):
    return self.nombre