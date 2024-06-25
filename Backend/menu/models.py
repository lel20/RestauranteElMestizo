# Create your models here.
from djongo import models
class Entrantes(models.Model):
    nombre = models.CharField(max_length=20)
    precio = models.DecimalField(max_digits=5, decimal_places=2)
    imagen = models.URLField(blank=True)  # Campo para almacenar la URL de la imagen
    disponibilidad = models.CharField(max_length=5)
    

    def __str__(self):
        return self.nombre