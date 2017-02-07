from .models import AboutModel
from django.template.response import HttpResponse
import json
from django.core import serializers
from bzrlib.transport.http._urllib2_wrappers import Request
from django.shortcuts import render, redirect

def getAboutLayers(request):
    
    context=dict(

        #HomeLogo = HomeModel.objects.first().HomeLogo,
    )
    return render(request, "chmod755+"+request.path, context)
    
def getAboutTopPics(Request):
    
    return HttpResponse(serializers.serialize('json', AboutModel.objects.get_queryset()))