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
        
    context=dict(
        year = datetime.datetime.now().year,
        bgp=HomeModel.objects.first().HomeBGP,
        HomeVideo = HomeModel.objects.first().HomeVideo,
    )
    return TemplateResponse(request, 'Home.html', context)

def home2(request):    
    
    return redirect("/")

def get_file(request):    
    
    Video = []
    Music = []
    
    Profile = json.loads(str(HomeModel.objects.first().Linkedin_API))
    myName = Profile["firstName"]+" "+Profile["lastName"]
    myTitle = Profile["headline"]
        
    v_api = json.loads(HomeModel.objects.first().YouTube_API)["items"]
    m_api = json.loads(HomeModel.objects.first().Music_API)["items"]
    
    for x in v_api:
        
        Video.append(Youtube(x["snippet"]["thumbnails"]["default"]["url"], x["snippet"]["title"], x["snippet"]["description"], x["snippet"]["resourceId"]["videoId"]))
    
    context=dict(

        HomeLogo = HomeModel.objects.first().HomeLogo,
        theName = myName,
        theTitle = myTitle,
        video = Video,
        music = Music
    )
    return render(request, "chmod755+"+request.path, context)
