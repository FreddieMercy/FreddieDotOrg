  //find Path

  function findPath(){

    var _path="";

    if($(".select1")){
        _path+= "<li><a href='"+$(".select1").children().attr("href")+"'>"+$(".select1").text()+"</a></li>";
        if($(".select2").children().attr("href") != undefined){

            if($(".select2").hasClass("OnlyHash")){

              _path+= "<li><a href='"+window.location.pathname+$(".select2").children().attr("href")+"'> &rightarrow; "+$(".select2").text()+"</a></li>";

            }else{
              _path+= "<li><a href='"+$(".select2").children().attr("href")+"'> &rightarrow; "+$(".select2").text()+"</a></li>";
            }
          }
    }


    $(".PathBar nav ul").html(_path);

  }

$(document).ready(function() {

  //select1 find default
	var notFound=true;

    $("#sidebar1 nav ul li").each(function(){

        if($(this).children().attr("href") === window.location.pathname)
        {
            if($(".select1")){
              $(".select1").removeClass("select1");
            }
            $(this).addClass("select1");
			notFound=false;
            return false;
        }

    });
//	console.log(notFound);
	if(notFound){
		$("#sidebar1 nav ul li").first().addClass("select1");
	}

    //select2 find (for now ForPath2 == OnlyHash), may change in the future
    //for now ForPath2 has no default because of above,
    //in "ajax.js", added class "select2" on the first child by default because of the reason above.

    $(".ForPath2 nav ul li").each(function(){

      if($(this).children().attr("href") === window.location.hash)
      {
        if($(".select2")){
          $(".select2").removeClass("select2");
        }
    
        $(this).addClass("select2");
          return false;
        }

    });


    $(window).on('hashchange', function() {
        
              $(".ForPath2 nav ul li").each(function(){

                  if($(this).children().attr("href") === window.location.hash)
                  {
                      if($(".select2")){
                        $(".select2").removeClass("select2");
                      }
                      $(this).addClass("select2");
                      return false;
                  }

              });

          findPath();
    });

  findPath();

});
