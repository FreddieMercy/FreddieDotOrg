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
    Photo_Album_Cover = models.FileField(upload_to="About/Top")
    
    
    def __unicode__(self):
        return self.first_text
    
@receiver(pre_delete, sender=AboutModel)
def myCover_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.
    instance.Photo_Album_Cover.delete(False)    
    
    