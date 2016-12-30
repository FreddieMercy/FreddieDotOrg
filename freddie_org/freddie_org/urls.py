from django.conf.urls import patterns, include, url
from django.contrib import admin
from HomePage import views as HomeView

urlpatterns = patterns('',
    # Examples:
    url(r'^$', HomeView.home, name='home'),
    url(r'^Home/', HomeView.home2, name='home2'),
    url(r'^admin/', admin.site.urls),
    

#ajax:

    url(r'^home.html', HomeView.get_file),
    #expire in django1.10
    url(r'^photolist/(?P<AlbumDir>.*)', HomeView.get_PhotoList),
)
