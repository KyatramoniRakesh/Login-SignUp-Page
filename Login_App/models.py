from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    age = models.PositiveIntegerField()
    dob = models.DateField()
    password = models.CharField(max_length=20)
    confirm_password = models.CharField(max_length=20, default='')

    def __str__(self):
        return '%s,%s,%d,%s,%s,%s'%(self.name,self.email,self.age,self.dob,self.password,self.confirm_password)
