from django.conf.urls import patterns, url
from django.contrib import admin
from HomePage import views as HomeView
from PhotoAlbums import views as PhotoAlbumView
from About import views as AboutView

urlpatterns = patterns('',
    # Examples:
    url(r'^$', HomeView.home, name='home'),
    url(r'^admin/', admin.site.urls),
    

#ajax:

    url(r'^home.html', HomeView.get_file),
    url(r'^PhotoAlbums.html', PhotoAlbumView.get_PicAndArrows),
    url(r'^About.html', AboutView.getAboutLayers),
    #url(r'^About_head.html', AboutView.getAboutHead),
    
    #expire in django1.10
    url(r'^photolist/(?P<AlbumDir>.*)', PhotoAlbumView.get_PhotoList),
    #url(r'^/(?P<Sites>.*)', HomeView.home2, name='home2'),
)
