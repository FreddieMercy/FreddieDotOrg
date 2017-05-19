var player;

function clickToSelect(choice){
	
	if(document.getElementById("selFooterYoutube")){
			    
		$("#selFooterYoutube").parent().css("background","black");
		//$("#selFooterYoutube").children().css("font-weight","normal");
		document.getElementById("selFooterYoutube").removeAttribute("id");
	};
			    		
	$(choice).attr("id","selFooterYoutube");
	$(choice).parent().css("background","orange");
	//$(this).children().css("font-weight","bold");
}

// autoplay video
function onPlayerReady(event) {
    event.target.playVideo();
}

// when video ends
function onPlayerStateChange(event) {        
    if(event.data === 0) {            
 			
    	var sel = document.getElementById("selFooterYoutube");//a
    	sel = $(sel).parent();//li
    	if(sel.next().text().length > 0){			
			sel = sel.next();//li
		}else{	
			sel = sel.parent();//ul
			sel = sel.children().first(); //li
		};
		
		sel = sel.children().first(); //a
		console.log(sel.text());
    	clickToSelect(sel);
 			
 		player.loadVideoById($(sel).attr("alt"));
    };
}
    
$(document).ready(function(){	
	
	$("#footerPlayList div nav ul").children().first().css("padding-top",$("#footerPlayList div nav ul").children().last().css("padding-bottom").replace("px", "")*2);
	
 	$(".yaFooter").hover(function(){
 		$(this).css({"background-color":"orange"});
 		//$(this).children().children().next().css({"font-weight":"bold"});
 				
    },function(){ 			
    	if($(this).children().attr("id") !== "selFooterYoutube")
    	{
 		            
 				$(this).css({"background-color":"#000"});
 				//$(this).children().children().next().css({"font-weight":"normal"});
 			
   		};
   	});	
 	
 	$(".yaFooter a").on("click", function(e){
		
 			e.preventDefault();
 			
 			clickToSelect(this);
 			
 			//Youtube Video Player Embeded
 			
 			if(player){
 				player.loadVideoById($(this).attr("alt"));
 			}
 			else{
 	 			player = new YT.Player('player', {
 	 			     videoId: $(this).attr("alt"),
 	 			     events: {
 	 			     'onReady': onPlayerReady,
 	 			     'onStateChange': onPlayerStateChange
 	 			     }
 	 		    });
 			};
 	});
 	 	
 });