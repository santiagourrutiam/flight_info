from django.db import models
from django.utils import timezone

class Flight (models.Model):

    aircraft = models.CharField(max_length=6)
    origin = models.CharField(max_length=6)
    destin = models.CharField(max_length=6)      
    etd = models.CharField(max_length=5) 
    eta = models.CharField(max_length=5)
    program_onb = models.CharField(max_length=20)
    status = models.CharField(max_length=15)
    
    def __str__(self):
        return self.aircraft+'from'+self.origin+' to '+self.destin+' '
