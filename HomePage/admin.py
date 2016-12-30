from django.contrib import admin
from .models import HomeModel

class HomeAdmin(admin.ModelAdmin):
    list_filter = ['Date_Added']

admin.site.register(HomeModel, HomeAdmin)