var jsonRaw="";
 $.ajax(
 	{
 		contentType: 'application/json; charset=UTF-8',
 		ifModified:true,
 		async:false,
 		url: "/AboutTopPic",
 		type:"GET",
 		cache:false,
 		dataType:'json',
 		success: function(response){

 			jsonRaw=response;
    
 		},
    			
 		error:function(error){
 			alert(error.status);
 		},
 	}
 );

$(document).ready(function() {

	//#About  

	if(jsonRaw)
	{
		var index=0;
		var node="<li>11</li>";
		var selnode='<li style="background:white;color:white;">11</li>';
		
		var trc="";

		$("#dljdText li span").fadeOut(100,function(){
			$("#dljd1 span").text(jsonRaw[index]["fields"]['first_text']);
			$("#dljd2 span").text(jsonRaw[index]["fields"]['second_text']);
			$("#dljd3 span").text(jsonRaw[index]["fields"]['third_text']);

			if($("#dljd2 span").text().length == 0 && $("#dljd3 span").text().length == 0){

				$("#dljd1").css("padding-top","35%");
			}else{
				$("#dljd1").css("padding-top","0px");
			}
				
			$("#playPics").html('<img style="min-height: 100%;" src="/static/media/'+jsonRaw[index]["fields"]['Top_Photo']+'">');
			
			
		}).fadeIn(1000);

		for(i  = 0; i<jsonRaw.length; i++)
		{
			if(i===0){
				trc+=selnode;
			}else{
				trc+=node;
			}

		}


		$("#Trace nav ul").html(trc);

		trc="";

		var timerId=window.setInterval(
	
			function(){


				$("#dljdText li span").fadeOut(500,function(){
					$("#dljd1 span").text(jsonRaw[index]["fields"]['first_text']);
					$("#dljd2 span").text(jsonRaw[index]["fields"]['second_text']);
					$("#dljd3 span").text(jsonRaw[index]["fields"]['third_text']);

				if($("#dljd2 span").text().length == 0 && $("#dljd3 span").text().length == 0){

					$("#dljd1").css("padding-top","35%");
				}else{
					$("#dljd1").css("padding-top","0px");
				}
					$("#playPics").html('<img style="min-height: 100%;" src="/static/media/'+jsonRaw[index]["fields"]['Top_Photo']+'">');
				}).fadeIn(1000);

				index+=1;

				if(index === jsonRaw.length){
					index=0;
				}

				for(i = 0; i<jsonRaw.length; i++)
				{
					if(i===index){

						trc+=selnode;


					}else{
						trc+=node;
					}

				}

				$("#Trace nav ul").html(trc);

				trc="";
			}
	
		,5000);
	}
	
	$(window).on('hashchange', function() {

		clearTimeout(timerId);
	});

	$("#DalianJunda").css({
							"height":$(window).height()-$("#sidebar1").height()-$("#HeaderPic").height()-$(".PathBar").outerHeight()+14,
							"min-height":500
						});



	$("#dljdLOGO img").css({
							
							"height":$("#DalianJunda").height()-parseInt($("#dljdLOGO").css("top").replace("px", ""))*2

							});

	$("#playPics img").css({
							
							"height":$("#DalianJunda").height()-parseInt($("#dljdLOGO").css("top").replace("px", ""))*2

							});


	$("#about2").css({

						"height":$("#HomeSecondAbout").outerHeight() - $("#about1").outerHeight()- $("#about3").outerHeight()
						 - parseInt($("#aboutText").css("margin-top").replace("px", ""))
						 	- parseInt($("#about3").css("margin-top").replace("px", ""))
						 		- parseInt($("#about2").css("margin-top").replace("px", ""))
							 		- parseInt($("#about1").css("padding-top").replace("px", ""))
									 	- parseInt($("#about3").css("padding-top").replace("px", ""))
									 		- parseInt($("#about2").css("padding-top").replace("px", ""))
									 			- parseInt($("#about1").css("padding-bottom").replace("px", ""))
												 	- parseInt($("#about3").css("padding-bottom").replace("px", ""))
												 		- parseInt($("#about2").css("padding-bottom").replace("px", ""))


					});


	$(window).scroll(function(e){

		//HomeSecondAbout
		var winBot=$(window).scrollTop() + $(window).height();
		var txtBot=$("#HomeSecondAbout").offset().top + $("#HomeSecondAbout").outerHeight();
		var txtPending=0;

		//opacity inc
		if(winBot>=$("#HomeSecondAbout").offset().top+txtPending  && winBot<txtBot+txtPending){

			var cof1=Math.sin(  (winBot-$("#HomeSecondAbout").offset().top-txtPending)  / $("#HomeSecondAbout").outerHeight()*(Math.PI/2) );

			$("#aboutText li").css({


				"opacity":cof1

			});

			$("#aboutText").css({

				"right":(cof1-1)*100

			});
		}
		//opacity dec
		else if($(window).scrollTop()>=$("#HomeSecondAbout").offset().top && $(window).scrollTop()<txtBot){

			var cof2=Math.sin(  (txtBot-$(window).scrollTop())  / $("#HomeSecondAbout").outerHeight()*(Math.PI/2) );

			$("#aboutText li").css({

				"opacity":cof2,

			});

			$("#aboutText").css({

				"right":(cof2-1)*100

			});

		}

		//opacity = 1
		else if(winBot >= txtBot+txtPending && $(window).scrollTop()<$("#HomeSecondAbout").offset().top+txtPending){
			$("#aboutText li").css({

				"opacity":"1",
		
			});

			$("#aboutText").css({

				"right":0

			});
		}

		//opacity = 0
		else
		{
			$("#aboutText li").css({

				"opacity":"0",
			});

			$("#aboutText").css({

				"right":"-100%"

			});
		}

//###################################################################################################################################################

		//HomeForthHire

		var eleBot=$("#HomeForthHire").offset().top + $("#HomeForthHire").outerHeight();
		var elePending=$("#HomeForthHire").outerHeight()/2;

		//opacity inc
		if(winBot>=$("#HomeForthHire").offset().top+elePending  && winBot<eleBot+elePending){
			$("#HomeForthHire li").css("opacity",Math.sin(  (winBot-$("#HomeForthHire").offset().top-elePending)  / $("#HomeForthHire").outerHeight()*(Math.PI/2) ));
		}
		//opacity dec
		else if($(window).scrollTop()>=$("#HomeForthHire").offset().top && $(window).scrollTop()<eleBot){
			$("#HomeForthHire li").css("opacity",Math.sin(  (eleBot-$(window).scrollTop())  / $("#HomeForthHire").outerHeight()*(Math.PI/2) ));
		}

		//opacity = 1
		else if(winBot >= eleBot+elePending && $(window).scrollTop()<$("#HomeForthHire").offset().top+elePending){
			$("#HomeForthHire li").css("opacity","1");
		}

		//opacity = 0
		else
		{
			$("#HomeForthHire li").css("opacity","0");
		}

	});
});