from .models import ProjectModel
from django.shortcuts import render

def getProjects(request):    
    
    context=dict(
        #pics = PhotoAlbumModel.objects.all(),
        #lAr = LeftAndRightArrows.objects.first().HomePicLeftArrow,
        #rAr = LeftAndRightArrows.objects.first().HomePicRighArrow,
    )
    return render(request, "chmod755+"+request.path, context)
