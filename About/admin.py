from django.contrib import admin
from .models import AboutModel

class AboutAdmin(admin.ModelAdmin):
    list_filter = ['Date_Added']

admin.site.register(AboutModel, AboutAdmin)