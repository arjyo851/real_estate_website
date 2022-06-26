from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(unique=True)

class Profile(models.Model):
    seller = models.OneToOneField(User, on_delete=models.CASCADE)
    agency_name = models.CharField(max_length=100, blank=True, null=True)
    phone_number = models.CharField(max_length=25, blank=True, null=True)
    bio = models.TextField(blank=True, null=True)
    profile_picture =  models.ImageField(upload_to='profile_pictures/%Y/%m/%d/', blank=True, null=True)

    def __str__(self):
        return f'profile of {self.seller.username}'