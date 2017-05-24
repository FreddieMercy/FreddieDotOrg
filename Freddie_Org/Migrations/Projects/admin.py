from django.contrib import admin
from .models import ProjectModel

class ProjectAdmin(admin.ModelAdmin):
    list_filter = ['Date_Added']

admin.site.register(ProjectModel, ProjectAdmin)