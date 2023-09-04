from django.db import models

class DroneModel (models.Model):
    model_name = models.CharField(max_length=50)
    
    def __str__(self):
        return self.model_name
    
class DroneFlight (models.Model):
    pilot = models.CharField (max_length=50)
    drone_model = models.ForeignKey(DroneModel, on_delete=models.CASCADE)
    location = models.CharField (max_length=20)
    flight_duration = models.IntegerField()
    weather = models.CharField (max_length=20)
    created = models.DateTimeField (auto_now_add=True)
    crash_unexpected = models.BooleanField(default=False)

    def __str__(self):
        return self.pilot+' has flown an RPA at '+self.location+' for '+self.flight_duration+'minutes'
    
