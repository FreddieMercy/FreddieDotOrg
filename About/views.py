from .models import AboutModel
from django.shortcuts import render

def getAboutLayers(request):    
    
    context=dict(
        #pics = PhotoAlbumModel.objects.all(),
        #lAr = LeftAndRightArrows.objects.first().HomePicLeftArrow,
        #rAr = LeftAndRightArrows.objects.first().HomePicRighArrow,
    )
    return render(request, "HomePage/chmod755+"+request.path, context)

def getAboutHead(request):    
    
    context=dict(
        #pics = PhotoAlbumModel.objects.all(),
        #lAr = LeftAndRightArrows.objects.first().HomePicLeftArrow,
        #rAr = LeftAndRightArrows.objects.first().HomePicRighArrow,
    )
    return render(request, "HomePage/chmod755+/About_head.html", context)
