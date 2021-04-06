from django.contrib import admin
<<<<<<< HEAD
from .models import HomeModel
=======
from .models import HomeModel, PhotoAlbumModel
#from .forms import FileFieldForm
#from .views import FileFieldView
>>>>>>> Save the code for Freddie

class HomeAdmin(admin.ModelAdmin):
    list_filter = ['Date_Added']

<<<<<<< HEAD
admin.site.register(HomeModel, HomeAdmin)
=======
admin.site.register(HomeModel, HomeAdmin)
admin.site.register(PhotoAlbumModel)
>>>>>>> Save the code for Freddie
