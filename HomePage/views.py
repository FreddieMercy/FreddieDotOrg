from django.template.response import TemplateResponse
import datetime
from .models import HomeModel
from django.shortcuts import render, redirect

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
    
    context=dict(

        HomeLogo = HomeModel.objects.first().HomeLogo,
    )
    return render(request, "chmod755+"+request.path, context)
