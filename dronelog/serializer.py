from rest_framework import serializers
from .models import DroneFlight, DroneModel

class DroneFlightSerializer (serializers.ModelSerializer):
    class Meta:
        model = DroneFlight
        fields = '__all__'

class DroneModelSerializer (serializers.ModelSerializer):
    class Meta:
        model = DroneModel
        fields = '__all__'