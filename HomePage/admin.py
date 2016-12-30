from django.contrib import admin
from .models import HomeModel, PhotoAlbumModel
#from .forms import FileFieldForm
#from .views import FileFieldView

class HomeAdmin(admin.ModelAdmin):
    list_filter = ['Date_Added']

admin.site.register(HomeModel, HomeAdmin)
admin.site.register(PhotoAlbumModel)