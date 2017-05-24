from django.db import models
from django.db.models.signals import pre_delete
from django.dispatch import receiver

# Create your models here.
class LeftAndRightArrows(models.Model):
    Date_Added  = models.DateTimeField(auto_now_add=False, auto_now=True)
    HomePicLeftArrow = models.FileField(upload_to="HomeFront", null=True)
    HomePicRighArrow = models.FileField(upload_to="HomeFront", null=True)
    
    def __unicode__(self):
        return str(self.Date_Added)
    
@receiver(pre_delete, sender=LeftAndRightArrows)
def LeftAndRightArrows_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.

    instance.HomePicLeftArrow.delete(False)
    instance.HomePicRighArrow.delete(False)

class PhotoAlbumModel(models.Model):
    
    name = models.CharField(max_length=150, blank=False, null=False)
    Date_Added = models.DateTimeField(auto_now_add=True, auto_now=False)
    Last_Modified = models.DateTimeField(auto_now_add=False, auto_now=True)
    Photo_Album_Cover = models.FileField(upload_to="Photo/Cover")
    Album_Url = models.CharField(max_length=200, blank=False, null=False)
    
    def __unicode__(self):
        return self.name
    
@receiver(pre_delete, sender=PhotoAlbumModel)
def myCover_delete(sender, instance, **kwargs):
    # Pass false so FileField doesn't save the model.
    instance.Photo_Album_Cover.delete(False)
