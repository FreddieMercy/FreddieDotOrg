from __future__ import unicode_literals
from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch import receiver

# Create your models here.
class AboutModel(models.Model):
    
    first_text = models.CharField(max_length=150, blank=False, null=False)
    second_text = models.CharField(max_length=200, blank=False, null=False)
    third_text = models.CharField(max_length=200, blank=False, null=False)
    Date_Added = models.DateTimeField(auto_now_add=True, auto_now=False)
    Last_Modified = models.DateTimeField(auto_now_add=False, auto_now=True)
    Top_Photo = models.FileField(upload_to="About/Top")
    
    
    def __unicode__(self):
        return self.first_text
    
@receiver(pre_delete, sender=AboutModel)
def myCover_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.
    instance.Top_Photo.delete(False)    
    
class AboutSecondText(models.Model):
    
    first_text = models.CharField(max_length=150, blank=False, null=False)
    second_text = models.CharField(max_length=200, blank=False, null=False)
    third_text = models.CharField(max_length=200, blank=False, null=False)
    Date_Added = models.DateTimeField(auto_now_add=True, auto_now=False)
    Last_Modified = models.DateTimeField(auto_now_add=False, auto_now=True)    
    Second_Left = models.FileField(upload_to="About/Second")
    Second_Right = models.FileField(upload_to="About/Second")
    
    def __unicode__(self):
        return str(self.Date_Added)
    
@receiver(pre_delete, sender=AboutSecondText)
def myProfile_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.
    instance.Second_Left.delete(False)    
    instance.Second_Right.delete(False)   
    
    
class AboutForthComment(models.Model):
    
    first_text = models.CharField(max_length=150, blank=False, null=False)
    second_text = models.CharField(max_length=200, blank=False, null=False)
    third_text = models.CharField(max_length=200, blank=False, null=False)
    Date_Added = models.DateTimeField(auto_now_add=True, auto_now=False)
    Last_Modified = models.DateTimeField(auto_now_add=False, auto_now=True)    
    
    def __unicode__(self):
        return str(self.Date_Added)
    
    
class AboutFifthContactQrAndTwoLines(models.Model):
    
    QR_Code = models.FileField(upload_to="About/Fifth")
    first_text = models.CharField(max_length=150, blank=False, null=False)
    second_text = models.CharField(max_length=200, blank=False, null=False)
    Date_Added = models.DateTimeField(auto_now_add=True, auto_now=False)
    Last_Modified = models.DateTimeField(auto_now_add=False, auto_now=True)    
        
    def __unicode__(self):
        return str(self.Date_Added)
    
@receiver(pre_delete, sender=AboutFifthContactQrAndTwoLines)
def myQR_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.
    instance.QR_Code.delete(False)    
    
    
class AboutFifthContactVertical(models.Model):

    span = models.CharField(max_length=200, blank=False, null=False) 
     
    def __unicode__(self):
        return str(self.span)

class AboutFifthContactHorizontal(models.Model):
    
    icon = models.FileField(upload_to="About/Fifth/icons")
    
    href = models.CharField(max_length=150,blank=False, null=False)
    alt = models.CharField(max_length=200,blank=False, null=False) 
     
    def __unicode__(self):
        return str(self.alt)
    
@receiver(pre_delete, sender=AboutFifthContactHorizontal)
def myIcon_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.
    instance.icon.delete(False)   
    
     