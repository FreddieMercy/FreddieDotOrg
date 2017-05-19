 var embed = "https://www.youtube.com/embed/"
	 
 var end = "?ecver=1" 

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
   	}
 	);	
 	
 	$(".yaFooter a").on("click", function(e){
		
 			e.preventDefault();
 			
 			if(document.getElementById("selFooterYoutube")){
 			    
 				$("#selFooterYoutube").parent().css("background","black");
 				//$("#selFooterYoutube").children().css("font-weight","normal");
 				document.getElementById("selFooterYoutube").removeAttribute("id");
 			};
 			
 		    if($(this).is("#selFooterYoutube")===false){
    		
 			$(this).attr("id","selFooterYoutube");
 			$(this).parent().css("background","orange");
 			//$(this).children().css("font-weight","bold");
 			
 			if($("#footerMusic").attr("src")!==embed+$(this).attr("alt")+end){
 				$("#footerMusic").attr("src", embed+$(this).attr("alt")+end);
 			    $("#footerMusic")[0].src += "&autoplay=1";
 			};
 		};
 	});
 	 	
 });