from django.template.response import HttpResponse
import os
from models import LeftAndRightArrows, PhotoAlbumModel
from django.shortcuts import render
import json

def get_PicAndArrows(request):
    
    context=dict(
        pics = PhotoAlbumModel.objects.all(),
        lAr = LeftAndRightArrows.objects.first().HomePicLeftArrow,
        rAr = LeftAndRightArrows.objects.first().HomePicRighArrow,
    )
    return render(request, "chmod755+"+request.path, context)

def get_PhotoList(request, AlbumDir):

    return HttpResponse(json.dumps(os.listdir(str(os.path.dirname(os.path.dirname(__file__)))+"/static/media/Photo/Albums/"+AlbumDir), ensure_ascii=False),content_type="application/json")
    
    