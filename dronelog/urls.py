from django.urls import path, include
from rest_framework import routers
from dronelog import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'droneflights', views.DroneFlightView, 'DroneFlights')
urlpatterns = [
    path("api/", include(router.urls)),
    path("docs/", include_docs_urls('title=DroneLog')),
]