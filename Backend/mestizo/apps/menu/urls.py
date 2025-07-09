
from django.urls import path
from .views import (
    Home,
    VisualizarEntrantes,
    VisualizarRaciones,
    ListarCrearTipicos,
    ListarCrearEnsaladas,
    ListarCrearSopas)
from django.urls import path
urlpatterns=[
    path('', Home.as_view(), name='home'),
    path('entrantes/', VisualizarEntrantes.as_view(), name="visualizarEntrantes"),
    path('raciones/', VisualizarRaciones.as_view(), name="visualizarraciones"),
    path('platostipicos/', ListarCrearTipicos.as_view(), name="listarcreartipicos"),
    path('ensaladas/', ListarCrearEnsaladas.as_view(), name="listarcrearensaladas"),
    path('sopas/', ListarCrearSopas.as_view(), name='listarcrearsopas')
]