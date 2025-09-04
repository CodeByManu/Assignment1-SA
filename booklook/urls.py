"""
URL configuration for booklook project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", include("app.urls")),
]

# Sirve MEDIA sólo si estamos en dev o si habilitas el flag SERVE_MEDIA
if settings.DEBUG or settings.SERVE_MEDIA:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Servir STATIC sólo si DEBUG o flag SERVE_STATIC está activo.
if settings.DEBUG or getattr(settings, "SERVE_STATIC", True):
    # Nota: en producción normalmente se usaría collectstatic y un proxy/CDN
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
