from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('contacto/', include('apps.contacto.urls')),
    path('', include('apps.menu.urls')),
]
