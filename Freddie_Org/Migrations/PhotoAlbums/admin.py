from django.contrib import admin
from .models import LeftAndRightArrows, PhotoAlbumModel

class PhotoAlbumsAdmin(admin.ModelAdmin):
    list_filter = ['Date_Added']

admin.site.register(LeftAndRightArrows, PhotoAlbumsAdmin)
admin.site.register(PhotoAlbumModel)