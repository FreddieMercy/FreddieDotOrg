var _secondFile;
var _div="";
var pathArray;
var _location;
var _sub;

function sideBarAboutInit(){
	pathArray = window.location.hash.split( '#' );
	_location = pathArray[1];
	_sub = pathArray[2];
	
	switch(_location){
	
	    case "Comment":
	        _div="#AboutContent";
	        break;
	
	    case "Projects":
	        _div="#HireContent";
	        break;
	}
}

function sidebarAboutBefore(sth){
    $(sth).css({"background-color":"green"});
    $(sth).children().children().css("color","white");
}

function sidebarAboutAfter(sth){
    $(sth).css({"background-color":"white"});
    $(sth).children().children().css("color","gray");
}

function sidebarAboutDNE()
{
	$(".sidebarAbout nav ul li").first().addClass("select2");
    _url=$(".sidebarAbout nav ul li a").first().attr("href").split("#")[1];
    if(_div==="#AboutContent"){
            $(".RightDiv div h1").text($(".sidebarAbout nav ul li a").first().text());

    }
}

function _ajaxInSub(){

    var _url="";

    	_secondFile = _sub;
	    if(_sub){
	        _url=window.location.hash.split("#")[1];
	        //on refresh, find the h1 text
	        if(_div==="#AboutContent" && $(".RightDiv div h1").text()==="Nihaoma"){
	            $(".sidebarAbout nav ul li").each(function(e){
	                if($(this).children().attr("href")===window.location.hash){$(".RightDiv div h1").text($(this).text());}
	                return false;
	            });
	            
	            sidebarAboutDNE();
	        }
	
	    }else{//no hashtag (first time) change h1 to first child text
	    	sidebarAboutDNE();
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


function _secondHashChanged(){
	
	sideBarAboutInit();
	if(_secondFile != _sub)
	{
        $(_div).fadeOut(500, function(e){
        	_ajaxInSub();                

        }).fadeIn(500);
	}
};


$(document).ready(function() {

	sideBarAboutInit();
	_ajaxInSub(); 

	$(".sidebarAbout nav ul li a").on("click",function(e){

                    if(_div==="#AboutContent"){

                        $(".RightDiv div h1").text($(this).text());

                    }

	  });

             
    $(window).on('hashchange', function() {
    	_secondHashChanged();

    });


    $(".sidebarAbout nav ul li").hover(function(){
    	sidebarAboutBefore(this);
                        
                             },function(){

                            	 sidebarAboutAfter(this);

        });
});