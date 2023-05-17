from django.urls import path, include
from rest_framework import routers
from flights_api_crud import views
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'flights', views.FlightView, 'Flights')
urlpatterns = [
    path("api/", include(router.urls)),
    path("docs/", include_docs_urls('title=Ale Flight Info')),

]