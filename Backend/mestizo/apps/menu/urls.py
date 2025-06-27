from .views import (
    VisualizarEntrantes,
    VisualizarRaciones,
    ListarCrearTipicos,
    ListarCrearSopas)
from django.urls import path
urlpatterns=[
    path('entrantes/', VisualizarEntrantes.as_view(), name="visualizarEntrantes"),
    path('raciones/', VisualizarRaciones.as_view(), name="visualizarraciones"),
    path('platostipicos/', ListarCrearTipicos.as_view(), name="listarcreartipicos"),
    path('sopas/', ListarCrearSopas.as_view(), name='listarcrearsopas')
]