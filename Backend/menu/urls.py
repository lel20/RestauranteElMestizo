from django.urls import path
from . import views

urlpatterns = [
    path('', views.raciones, name='raciones'),
    path('entrantes/', views.entrantes, name='entrantes'),
    path('caldos/', views.caldos, name='caldos'),
    path('tipicos/', views.tipicos, name='tipicos'),
    path('batidos/', views.batidos, name='batidos'),
    path('test-db/', views.test_db_connection, 
    name='test_db_connection'),
   
]
 