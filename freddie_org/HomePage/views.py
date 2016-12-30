from django.template.response import TemplateResponse, HttpResponse
import datetime
import os
from .models import HomeModel, PhotoAlbumModel
from django.shortcuts import render, redirect
import json

def home(request):    
    
    #dirs = str(os.path.dirname(os.path.dirname(__file__)))+"/HomePage/static/img/media/"
    
    context=dict(
        year = datetime.datetime.now().year,
        #bgp=str(os.listdir(dirs+"Background")[0]),
        bgp=HomeModel.objects.first().HomeBGP,
    )
    return TemplateResponse(request, 'HomePage/Home.html', context)

def home2(request):    
    
    return redirect("/")

def get_file(request):
    
    context=dict(

        HomeLogo = HomeModel.objects.first().HomeLogo,
        Home_P = HomeModel.objects.first().title,
        HomeVideo = HomeModel.objects.first().HomeVideo,
        pics = PhotoAlbumModel.objects.all(),
        lAr = HomeModel.objects.first().HomePicLeftArrow,
        rAr = HomeModel.objects.first().HomePicRighArrow,
    )
    return render(request, "HomePage/chmod755+"+request.path, context)

def get_PhotoList(request, AlbumDir):

    return HttpResponse(json.dumps(os.listdir(str(os.path.dirname(os.path.dirname(__file__)))+"/static/media/Photo/Albums/"+AlbumDir), ensure_ascii=False),content_type="application/json")
    
    