from .views import VisualizarEntrantes
from django.urls import path
urlpatterns=[
    path('', VisualizarEntrantes.as_view(), name="mostarMenu")
]