from django.conf.urls import url
from django.contrib import admin
from HomePage import views as HomeView
from PhotoAlbums import views as PhotoAlbumView
from About import views as AboutView
from Comments import views as CommentView
from Projects import views as ProjectView

urlpatterns = [
    # Examples:
    url(r'^$', HomeView.home, name='home'),
    url(r'^admin/', admin.site.urls),
    

#ajax:

    url(r'^home.html', HomeView.get_file),
    url(r'^PhotoAlbums.html', PhotoAlbumView.get_PicAndArrows),
    url(r'^About.html', AboutView.getAboutLayers),
    url(r'^Comment.html', CommentView.getCommentUI),
    url(r'^Projects.html', ProjectView.getProjects),
    
    url(r'^AboutTopPic', AboutView.getAboutTopPics),
    
    #expire in django1.10
    url(r'^photolist/(?P<AlbumDir>.*)', PhotoAlbumView.get_PhotoList),
    #url(r'^/(?P<Sites>.*)', HomeView.home2, name='home2'),
]
