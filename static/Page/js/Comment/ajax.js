var _sub = "";
var _div="";

pathArray = window.location.pathname.split( '/' );
_location = pathArray[pathArray.length-1];

switch(_location){

    case "about.php":
        _sub="ino";
        _div="#AboutContent";
        break;

    case "hire.php":
        _sub="job";
        _div="#HireContent";
        break;
}

function _ajax(){

    var _url="";

    if(window.location.hash){
        _url=window.location.hash.split("#")[1];
        //on refresh, find the h1 text
        if(_div==="#AboutContent" && $(".RightDiv div h1").text()==="Nihaoma"){
            $(".sidebarAbout nav ul li").each(function(e){
                if($(this).children().attr("href")===window.location.hash){$(".RightDiv div h1").text($(this).text());}

            });
        }

    }else{//no hashtag (first time) change h1 to first child text
        $(".sidebarAbout nav ul li").first().addClass("select2");
        _url=$(".sidebarAbout nav ul li a").first().attr("href").split("#")[1];
        if(_div==="#AboutContent"){
                $(".RightDiv div h1").text($(".sidebarAbout nav ul li a").first().text());

        }
    }
    
    /*
    $.ajax(
    		{
    			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    			ifModified:true,
    			async:false,
    			url: "/templates/functions.php?"+_sub+"="+_url,
    			type:"GET",
    			cache:false,
    			dataType:'html',
    			success: function(response){

    				$(_div).html(response);
    
    			},
    			
    			error:function(error){
    				alert(error.status);
    			},
    		}
    	);
    */
}

$(document).ready(function() {

    _ajax(); 

	$(".sidebarAbout nav ul li a").on("click",function(e){

                    if(_div==="#AboutContent"){

                        $(".RightDiv div h1").text($(this).text());

                    }

	  });

             
    $(window).on('hashchange', function() {
        
            $(_div).fadeOut(500, function(e){
                _ajax();                

            }).fadeIn(500);
    });


    $(".sidebarAbout nav ul li").hover(function(){
                    $(this).css({"background-color":"green"});
                    $(this).children().children().css("color","white");
                        
                             },function(){

                                $(this).css({"background-color":"white"});
                                $(this).children().children().css("color","gray");

        });
});