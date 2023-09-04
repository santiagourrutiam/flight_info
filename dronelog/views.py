from django.shortcuts import render
from rest_framework import viewsets
from .serializer import DroneFlightSerializer
from .models import DroneFlight

class DroneFlightView(viewsets.ModelViewSet):
    serializer_class = DroneFlightSerializer
    queryset = DroneFlight.objects.all()
