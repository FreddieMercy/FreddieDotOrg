from .models import CommentModel
from django.shortcuts import render

def getCommentUI(request):    
    
    context=dict(
        #pics = PhotoAlbumModel.objects.all(),
        #lAr = LeftAndRightArrows.objects.first().HomePicLeftArrow,
        #rAr = LeftAndRightArrows.objects.first().HomePicRighArrow,
    )
    return render(request, "chmod755+"+request.path, context)
