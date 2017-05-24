from django.contrib import admin
from .models import CommentModel

class CommentAdmin(admin.ModelAdmin):
    list_filter = ['Date_Added']

admin.site.register(CommentModel, CommentAdmin)