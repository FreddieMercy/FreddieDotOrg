from django.contrib import admin
from .models import AboutModel, AboutSecondText, AboutForthComment, AboutFifthContactQrAndTwoLines, AboutFifthContactHorizontal, AboutFifthContactVertical

class AboutAdmin(admin.ModelAdmin):
    list_filter = ['Date_Added']

admin.site.register(AboutModel, AboutAdmin)
admin.site.register(AboutSecondText, AboutAdmin)
admin.site.register(AboutForthComment, AboutAdmin)
admin.site.register(AboutFifthContactQrAndTwoLines)
admin.site.register(AboutFifthContactHorizontal)
admin.site.register(AboutFifthContactVertical)




