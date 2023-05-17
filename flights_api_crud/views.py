from django.shortcuts import render
from rest_framework import viewsets
from .serializer import FlightSerializer
from .models import Flight

class FlightView(viewsets.ModelViewSet):
    serializer_class = FlightSerializer
    queryset = Flight.objects.all()
