$(document).ready(function() {

	var _location = window.location.hash.split( '#' )[1];
	  
	$(".RightDiv").css({

		"width":$(window).width()-$(".sidebarAbout").width()-3//because of border-right

	  });
  
  $(".sidebarAbout nav ul li").each(function(){

	  $(this).children().attr("href", "#"+_location+"#"+$(this).children().text());
	  
      if($(this).children().attr("href") === window.location.hash)
      {
          if($(".select2")){
            $(".select2").removeClass("select2");
          }
          $(this).addClass("select2");
      }

  });

});