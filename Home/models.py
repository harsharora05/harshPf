from django.db import models

# Create your models here.


class contact(models.Model):
    name  = models.CharField(default="", max_length=50)
    email  = models.EmailField(default="", max_length=50)
    number  = models.IntegerField(default="")
    subject  = models.CharField(default="", max_length=50)
    message  = models.TextField(default="", max_length=200)

    def __str__(self): 
        return "Message From" + str(self.name) + "  " +str(self.email)
    
class project(models.Model):
    photo=models.ImageField(upload_to="project")
    projectName  = models.CharField(default="", max_length=50)
    info  = models.CharField(default="", max_length=50)
    Link  = models.CharField(default="", max_length=50)

    

    def __str__(self): 
        return str(self.projectName ) 
    




