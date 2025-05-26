from django.urls import path
from .views import Mostrar_contacto

urlpatterns=[
    path('', Mostrar_contacto.as_view(), name="mostrar")
    
]