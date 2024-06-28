from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('test-db/', views.test_db_connection, name='test_db_connection'),
   
]
