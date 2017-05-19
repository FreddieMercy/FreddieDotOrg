 var error = 100;
 var error_time = 50;
 var embed = "https://www.youtube.com/embed/";
 var end = "?ecver=1";
 
 function clickToSelects(choice){
		
		if(document.getElementById("selYoutube")){
				    
			$("#selYoutube").parent().css("background","black");
			document.getElementById("selYoutube").removeAttribute("id");
		};
				    		
		$(choice).attr("id","selYoutube");
		$(choice).parent().css("background","gray");
 }

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

	$(".ctn").css("width", $(window).width()); //keep it center
	
	//select first by default
	$("#video").attr("src", embed+$("#youtubePlayList div nav ul li").children().first().attr("alt")+end);
	clickToSelects($("#youtubePlayList div nav ul li").children().first());
	
 	$(".yaHome").hover(function(){
 		$(this).css({"background-color":"gray"});
 		//$(this).children().children().next().css({"font-weight":"bold"});
 				
    },function(){ 			
    	if($(this).children().attr("id") !== "selYoutube")
    	{ 		            
 			$(this).css({"background-color":"#000"});
 			//$(this).children().children().next().css({"font-weight":"normal"});	
   		};
   	});	
 	
 	$(".yaHome a").on("click", function(e){
		
 			e.preventDefault();
 			
 			clickToSelects(this);
 			
 			if($("#video").attr("src")!==embed+$(this).attr("alt")+end){
 				$("#video").attr("src", embed+$(this).attr("alt")+end);
 			    $("#video")[0].src += "&autoplay=1";
 			};
 		
 	});
 	 	
 });