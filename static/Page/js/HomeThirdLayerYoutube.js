 var error = 100;
 var error_time = 50;

$(document).ready(function(){
	
 	//fade in/out while scrolling screen-wide	
 	$(window).scroll(function(e) {
 		
 		$("#Sections").css("opacity",Math.abs(Math.cos(($(window).scrollTop()%(2*$(window).height()))/$(window).height()*Math.PI)));
 	
 	});	
 		
    $('#back-to-top-Home').on('click', function (e) {
        e.preventDefault();
        if($(window).scrollTop()%$(window).height() === 0)
        {
        	$('html, body').animate({ scrollTop: $(window).scrollTop() - $(window).height() }, 1500);
        }
        else if($(window).scrollTop()%$(window).height() < error)
        {
        	$('html, body').animate({ scrollTop: $(window).scrollTop() - error }, error_time);
        }
        else
        {
        	$('html, body').animate({ scrollTop: $(window).scrollTop() - $(window).scrollTop()%$(window).height() }, 1500);
        };
    });
    
    $('#back-to-bot-Home').on('click', function (e) {
        e.preventDefault();
        if($(window).scrollTop()%$(window).height() === 0)
        {
        	$('html, body').animate({ scrollTop: $(window).scrollTop() + $(window).height() }, 1500);
        	
        }
      	else if($(window).height() - $(window).scrollTop()%$(window).height() < error)
        {
        	$('html, body').animate({ scrollTop: $(window).scrollTop() + error }, error_time);
        }
        else
        {
        	$('html, body').animate({ scrollTop: $(window).scrollTop() + $(window).height() - $(window).scrollTop()%$(window).height() }, 1500);
        };
    });

	$(".ctn").css("width", $(window).width());
 });
 
 //---------------------------------------------------------------------------------------
 /*
 	$("#siderBar_Pic div nav ul li").hover(function(){
 		$(this).css({"background-color":"#2F2F2F"});
 		$(this).children().children().next().css({"font-weight":"bold"});
 				
    },function(){ 			
    	if($(this).children().attr("id") !== "selPhotoAlbum")
    	{
 		            
 				$(this).css({"background-color":"#000"});
 				$(this).children().children().next().css({"font-weight":"normal"});
 			
   		};
   	}
 	);	
 	
 	$("#siderBar_Pic div nav ul li a").on("click", function(e){
		
 			e.preventDefault();
 		    if($(this).is("#selPhotoAlbum")===false){
    		
 		    $( document ).ajaxStop(function() {
 		    		  $( ".log" ).text( "Triggered ajaxStop handler." );
 		    		});
 		    
 		    clearInterval(timerId);
 		    clearInterval(albumId);
 		    if(document.getElementById("myCheck")){
 		    		
 		    		$("#myCheck").prop("checked",false);
 		    	};
 		    
 			if(document.getElementById("selPhotoAlbum")){
 			    
 				$("#selPhotoAlbum").parent().css("background","black");
 				$("#selPhotoAlbum").children().css("font-weight","normal");
 				document.getElementById("selPhotoAlbum").removeAttribute("id");
 			};
 			$(this).attr("id","selPhotoAlbum");
 			$(this).parent().css("background","#2F2F2F");
 			$(this).children().css("font-weight","bold");
 		}
 	});
 */
 //---------------------------------------------------------------------------------------

			
