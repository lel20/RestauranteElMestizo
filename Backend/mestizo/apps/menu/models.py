from django.db import models
class Entrantes(models.Model):
    nombre=models.CharField(max_length=50)
    precio=models.DecimalField(max_digits=6, decimal_places=2)
    descripcion=models.TextField()
    disponibilidad=models.BooleanField(default=True)
    fecha_creacion=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre
# Create your models here.
