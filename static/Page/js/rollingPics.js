var timerId = 0;
var albumId = 0;
var curAjax = "";
	
$(document).ready(function(){
	
	if ($('#back-to-top').length) {
		
	    $('#back-to-top').on('click', function (e) {
	        e.preventDefault();
	        $("#siderBar_Pic").animate({
	        scrollTop: 0
	        }, 300);
	    });
	};

	$("#dispPic").css("height", $(window).height()-10);
	$("#leftArrow").hide();
	$("#righArrow").hide();
	
	//set up bar and display location
	$("#HomeBotPic").css("padding-bottom", $("#sidebar1").outerHeight());	
	$("#dispPic").css("top", $("#sidebar1").outerHeight());
	$("#siderBar_Pic").css("padding-top", $("#sidebar1").outerHeight());
	
	var opts = {
	  lines: 13 // The number of lines to draw
	, length: 28 // The length of each line
	, width: 14 // The line thickness
	, radius: 42 // The radius of the inner circle
	, scale: 1 // Scales overall size of the spinner
	, corners: 1 // Corner roundness (0..1)
	, color: '#fff' // #rgb or #rrggbb or array of colors
	, opacity: 0.25 // Opacity of the lines
	, rotate: 0 // The rotation offset
	, direction: 1 // 1: clockwise, -1: counterclockwise
	, speed: 1 // Rounds per second
	, trail: 60 // Afterglow percentage
	, fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
	, zIndex: 2e9 // The z-index (defaults to 2000000000)
	, className: 'spinner' // The CSS class to assign to the spinner
	, top: '50%' // Top position relative to parent
	, left: '59%' // Left position relative to parent
	, shadow: false // Whether to render a shadow
	, hwaccel: false // Whether to use hardware acceleration
	, position: 'absolute' // Element positioning
	}
	
	/*
	$(window).scroll(function(e) {
	
		$("#Sections").css("opacity",Math.abs(Math.cos(($(window).scrollTop()%(2*$(window).height()))/$(window).height()*Math.PI)));

	});
	*/
	
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
	
	//Display Album Covers if no selected Album
	$("#siderBar_Pic div nav ul li").first().addClass( "homeAlbumCoverPics" );

	var wid=$(window).width()/100*82;
	var hei=$(window).height()-10;
	var dImg="#dispPic img";						

	timerId=window.setInterval(
	
		function(){

			var img = $(".homeAlbumCoverPics").children().children().prop('src');
			var des = $(".homeAlbumCoverPics").children().children().next().text();
			$("#dispPic").fadeOut(500, function(){
				
				$("#dispPic").html(" <div style='width:100%; height:auto; background:black; opacity:0.7;" +
					"padding:0px; margin:0px; position:absolute;bottom:0;' align=center><h1>" + des + "</h1></div>" +
					"<style>" +
					"#dispPic div h1{ color:white; font-weight:bold; font-size:100px; }"+
					"</style>"
				);
					
				$("#dispPic").css({
				"background-position":"center",
				"background-image":'url('+img+')',
				"background-repeat":"no-repeat",
				"background-size":"contain"});
			
			}).fadeIn(500);		
			
			var tmp = $(".homeAlbumCoverPics");
			$(".homeAlbumCoverPics").removeClass("homeAlbumCoverPics");
				
			if(tmp.next().text().length>0){
				tmp.next().addClass("homeAlbumCoverPics");
			}else{

				$("#siderBar_Pic div nav ul li").first().addClass("homeAlbumCoverPics");
			}
	
	},5000);
	
	
	//Display photos under that selected Album folder
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
		
		if($("#selPhotoAlbum").attr("alt")!=curAjax){
		    $.ajax(
		    		{
		    			contentType: 'application/json; charset=UTF-8',
		    			ifModified:true,
		    			async:false,
	
		    			url: "photolist/"+$("#selPhotoAlbum").attr("alt")+"/",
		    			type:"GET",
		    			cache:false,
		    			dataType:'json',
		    			error:function(error){
		    				alert(error.status);
		    			},
		    			success: function(obj, c, xhr){
							//console.log("response status code: "+xhr.status);
		    				//console.log(obj);
		    				curAjax = $("#selPhotoAlbum").attr("alt");
							if(xhr.status===200 || xhr.status===300 || xhr.status===304){
								
								$("#Spin").show()
								var target = document.getElementById('Spin')
								var spinner = new Spinner(opts).spin(target);
	
			    				var index = -1;
			    		
			    				
			    				$("#leftArrow").show().css("opacity","0");
			    				$("#righArrow").show().css("opacity","0");
			    				
			    				$("#leftArrow").hover(function(){	
			    					$(this).css({"opacity":"0.7"});
			    					clearInterval(albumId);
			    				},function(){ 
			    					$(this).css({"opacity":"0"});
			    				    if(document.getElementById("myCheck")){
	
			    			    		if($("#myCheck").prop("checked")){
			    			    	
			    			    			albumId=window.setInterval(
		    	    						
		    	    						function(){
	
		    	    							$("#dispPic").fadeOut(500, function(){
		    	    								
		    	    		    					index++;
		    	        							if(index>=obj.length){
	
		    	        								index=0;
		    	        							};
		    	    								
		    	    								$("#dispPic").css({
		    	    								"background-position":"center",
		    	    								"background-image":'url(/static/media/Photo/Albums/'+$("#selPhotoAlbum").attr("alt")+'/'
		    	    									+ obj[index]+')',
		    	    								"background-repeat":"no-repeat",
		    	    								"background-size":"contain"});
			    	    							
			    	    							console.log("index left:"+index);
			    	    							
		    	    							}).fadeIn(500);		
		    	    					
		    	    					},5000);
			    			    		};
			    				    };
			    				});	
			    				
			    				$("#righArrow").hover(function(){
			    					$(this).css({"opacity":"0.7"});
			    					clearInterval(albumId);
			    				},function(){ 
			    					$(this).css({"opacity":"0"});
			    				    if(document.getElementById("myCheck")){
	
			    			    		if($("#myCheck").prop("checked")){
			    			    	
		    	    				albumId=window.setInterval(
		    	    						
		    	    						function(){
	
		    	    							$("#dispPic").fadeOut(500, function(){
		    	    								
		    	    		    					index++;
		    	        							if(index>=obj.length){
	
		    	        								index=0;
		    	        							};
		    	    								
		    	    								$("#dispPic").css({
		    	    								"background-position":"center",
		    	    								"background-image":'url(/static/media/Photo/Albums/'+$("#selPhotoAlbum").attr("alt")+'/'
		    	    									+ obj[index]+')',
		    	    								"background-repeat":"no-repeat",
		    	    								"background-size":"contain"});
			    	    							
			    	    							console.log("index right:"+index);
			    	    							
		    	    							}).fadeIn(500);		
		    	    					
		    	    					},5000);
			    			    		};
			    				    };
			    				});	
			    				
			    				$("#leftArrow").on("click",function(){
			    					
			    					index--;		    	
	    							
			    					if(index<0){
	    								
	    								index=obj.length-1;
	    							};
			    					
			    					$("#dispPic").fadeOut(100, function(){
									
										$("#dispPic").css({
										"background-position":"center",
										"background-image":'url(/static/media/Photo/Albums/'+$("#selPhotoAlbum").attr("alt")+'/'
											+ obj[index]+')',
										"background-repeat":"no-repeat",
										"background-size":"contain"});			
										
										console.log("index left click: "+index);
	    							
			    					}).fadeIn(100);		
			    					
			    				});
			    				
			    				$("#righArrow").on("click",function(){
			    					
			    					index++;
			    					
	    							if(index>=obj.length){
	    								
	    								index=0;
	    							};
			    					
			    					$("#dispPic").fadeOut(100, function(){
									
										$("#dispPic").css({
										"background-position":"center",
										"background-image":'url(/static/media/Photo/Albums/'+$("#selPhotoAlbum").attr("alt")+'/'
											+ obj[index]+')',
										"background-repeat":"no-repeat",
										"background-size":"contain"});		
										
										console.log("index right click: "+index);
	    							
			    					}).fadeIn(100);		
			    					
			    				});
			    				
								$("#dispPic").html(" <div style='width:100%; height:auto; background:black; opacity:0.7;" +
										"padding:0px; margin:0px; position:absolute;bottom:0;' align=center><ul><li><input type='checkbox' id='myCheck'" +
										" style='width:50px;height:50px;' checked='true'></li><li> <p style='padding-bottom:30px;'>Auto Play</p></li></ul></div>" +
										"<style>" +
										"#dispPic div ul li p { color:white; font-weight:bold; font-size:100px;padding:0px; margin:0px; }"+
										"</style>");
			    				
			    				albumId=window.setInterval(
			    						
			    						function(){
			    							
		    								index++;
			    							if(index>=obj.length){
			    								
			    								index=0;
			    							};
	
			    							$("#dispPic div").css("opacity","0");
			    							$("#dispPic div").hover(function(){	$(this).css({"opacity":"0.7"});},
			    													function(){ $(this).css({"opacity":"0"});});	
			    							$("#dispPic").fadeOut(500, function(){
			    								
			    								$("#dispPic").css({
			    								"background-position":"center",
			    								"background-image":'url(/static/media/Photo/Albums/'+$("#selPhotoAlbum").attr("alt")+'/'
			    									+ obj[index]+')',
			    								"background-repeat":"no-repeat",
			    								"background-size":"contain"});
			    								
			    								console.log("(main)index:"+index);
			    							
			    							}).fadeIn(500);		
			    									    							
			    							spinner.stop(); 
			    							$("#Spin").html("");
			    							$("#Spin").hide();
	    	    							
	    	    							
	    	    							
			    					},5000);
			    				
			    				$("#myCheck").change(function() {
	
			    				    if(this.checked) {
			    				    	clearInterval(albumId);
			    	    				albumId=window.setInterval(
			    	    						
			    	    						function(){
			    	    							
			    	    							if(index<obj.length-1){
			    	    								index++;
			    	    							}else{
		
			    	    								index=0;
			    	    							};
		
			    	    							$("#dispPic").fadeOut(500, function(){
			    	    								
			    	    								$("#dispPic").css({
			    	    								"background-position":"center",
			    	    								"background-image":'url(/static/media/Photo/Albums/'+$("#selPhotoAlbum").attr("alt")+'/'
			    	    									+ obj[index]+')',
			    	    								"background-repeat":"no-repeat",
			    	    								"background-size":"contain"});
				    	    							
				    	    							console.log("(myCk)index:"+index);
				    	    							
			    	    							}).fadeIn(500);		
			    	    					
			    	    					},5000);
			    				    }else{
			    				    	clearInterval(albumId);
			    				    };
			    				    
			    				});
			    
			    			};
		    			},
		    		}
		    	);
		    };
	    };
	});	
	
	$(window).on('hashchange', function() {

		clearTimeout(timerId);
		clearTimeout(albumId);
	});

});
