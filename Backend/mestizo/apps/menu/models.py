from django.db import models
class PlatosBase(models.Model):
    nombre=models.CharField(max_length=50)
    precio=models.DecimalField(max_digits=6, decimal_places=2)
    disponibilidad=models.BooleanField(default=True)
    fecha_creacion=models.DateTimeField(auto_now_add=True)
    
    class Meta:
        abstract=True #No crea la tabla en la base de datos
class Raciones(PlatosBase):

    def __str__(self):
        return self.nombre
    
class Entrantes(PlatosBase):
    descripcion=models.TextField()

    def __str__(self):
        return self.nombre
# Create your models here.

class Sopas(PlatosBase):
    descripcion=models.TextField()
    def __str__(self):
        return self.nombre

class Tipicos(PlatosBase):
   imagen=models.ImageField(upload_to='platos_tipicos/')
   descripcion=models.TextField()
   
   def __str__(self):
       return self.nombre
