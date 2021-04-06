<<<<<<< HEAD
from django.template.response import TemplateResponse
import datetime
from .models import HomeModel
from django.shortcuts import render, redirect
import json

class Youtube:
    def __init__(self, p, t, d, vid):
        self.pic = p
        self.title = t
        self.desrip = d
        self.vid = vid

def home(request):        
    
    Music = []
    
    m_api = json.loads(HomeModel.objects.first().Music_API)["items"]
    
    for x in m_api:           
        Music.append(Youtube(x["snippet"]["thumbnails"]["default"]["url"], x["snippet"]["title"], x["snippet"]["description"] , x["snippet"]["resourceId"]["videoId"]))
    
    context=dict(
        year = datetime.datetime.now().year,
        HomeVideo = HomeModel.objects.first().HomeVideo,
        music = Music,        
    )
    return TemplateResponse(request, 'Home.html', context)
=======
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
>>>>>>> Save the code for Freddie

def home2(request):    
    
    return redirect("/")

<<<<<<< HEAD
def get_file(request):    
    
    Video = []
    
    Profile = json.loads(str(HomeModel.objects.first().Linkedin_API))
    myName = Profile["firstName"]+" "+Profile["lastName"]
    myTitle = Profile["headline"]
        
    v_api = json.loads(HomeModel.objects.first().YouTube_API)["items"]
                  
    for x in v_api:           
        Video.append(Youtube(x["snippet"]["thumbnails"]["default"]["url"], x["snippet"]["title"], x["snippet"]["description"] , x["snippet"]["resourceId"]["videoId"]))
=======
def get_file(request):
>>>>>>> Save the code for Freddie
    
    context=dict(

        HomeLogo = HomeModel.objects.first().HomeLogo,
<<<<<<< HEAD
        theName = myName,
        theTitle = myTitle,
        video = Video,
        Pic = HomeModel.objects.first().HomeProfilePic,
    )
    return render(request, "chmod755+"+request.path, context)
=======
        Home_P = HomeModel.objects.first().title,
        HomeVideo = HomeModel.objects.first().HomeVideo,
        pics = PhotoAlbumModel.objects.all(),
        lAr = HomeModel.objects.first().HomePicLeftArrow,
        rAr = HomeModel.objects.first().HomePicRighArrow,
    )
    return render(request, "HomePage/chmod755+"+request.path, context)

def get_PhotoList(request, AlbumDir):

    return HttpResponse(json.dumps(os.listdir(str(os.path.dirname(os.path.dirname(__file__)))+"/static/media/Photo/Albums/"+AlbumDir), ensure_ascii=False),content_type="application/json")
    
    
>>>>>>> Save the code for Freddie
