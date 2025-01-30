from django.urls import path
from . import views

urlpatterns = [
    path('', views.raciones.as_view(), name='raciones'),
    path('entrantes/', views.entrantes.as_view(), name='entrantes'),
    path('caldos/', views.caldos.as_view(), name='caldos'),
    path('tipicos/', views.tipicos.as_view(), name='tipicos'),
    path('batidos/', views.batidos, name='batidos'),
    path('test-db/', views.test_db_connection, 
    name='test_db_connection'),
   
]
 