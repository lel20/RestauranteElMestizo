from .views import Mostra_menu
from django.urls import path
urlpatterns=[
    path('', Mostra_menu.as_view(), name="mostarMenu")
]