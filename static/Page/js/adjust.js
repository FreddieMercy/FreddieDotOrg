$(document).ready(function() {

	//From articles.js

	//Overall
	$("#sidebar1 nav a").hover(function(){
					$(this).css({"background-color":"#FFF","color":$("#sidebar1").css("background-color")});
    					
				             },function(){
//								if($(this).attr("id") !== "selected")
//								{
								$(this).css({"background-color":$("#sidebar1").css("background-color"),"color":"#FFF"});
//								};
	});	


	$("#sidebar1").css({
		
			"top":$("#HeaderPic").height()
		
		});
	

	$(".container").css({

						"margin-top":$("#sidebar1").height()+$("#HeaderPic").height(),

					});
	$("body").css("padding-bottom", $("footer").height()+14);

  $("header").headroom();

  $("#placeholderTop").css({

            "height":$("#sidebar1").height()+$("#HeaderPic").height()

  });

/* 
	  $('#bookmark-this').click(function(e) {
    var bookmarkURL = window.location.hostname;
    var bookmarkTitle = document.title;

    if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
      // Mobile browsers
      addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
    } else if (window.sidebar && window.sidebar.addPanel) {
      // Firefox version < 23
      window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
    } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
      // Firefox version >= 23 and Opera Hotlist
      $(this).attr({
        href: bookmarkURL,
        title: bookmarkTitle,
        rel: 'sidebar'
      }).off(e);
      return true;
    } else if (window.external && ('AddFavorite' in window.external)) {
      // IE Favorite
      window.external.AddFavorite(bookmarkURL, bookmarkTitle);
    } else {
      // Other browsers (mainly WebKit - Chrome/Safari)
      alert('Press ' + (/Mac/i.test(navigator.userAgent) ? 'Cmd' : 'Ctrl') + '+D to bookmark this page.');
    }

    return false;
  });


-------------------------------------------------------------------------------------------------------------------


  $("#bookmark-this").click(function() {
    if (window.sidebar) { // Mozilla Firefox Bookmark
      window.sidebar.addPanel(location.href,document.title,"");
    } else if(window.external) { // IE Favorite
      window.external.AddFavorite(location.href,document.title); }
    else if(window.opera && window.print) { // Opera Hotlist
      this.title=document.title;
      return true;
    }
  });
	  */
});

