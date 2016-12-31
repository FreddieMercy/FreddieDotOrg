$(document).ready(function() {

	$(".RightDiv").css({

		"width":$(window).width()-$(".sidebarAbout").width()-3//because of border-right

	  });


  $(".sidebarAbout nav ul li").each(function(){

      if($(this).children().attr("href") === window.location.hash)
      {
          if($(".select2")){
            $(".select2").removeClass("select2");
          }
          $(this).addClass("select2");
          return false;
      }

  });

});