from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status 


class Mostra_menu(APIView):
    def get(self, request):
        return Response({"mensaje":"Mostrando menu"}, status=status.HTTP_200_OK)

    def post(self, request):
        return Response({"mensaje": "Recibido el POST"}, status=status.HTTP_201_CREATED)