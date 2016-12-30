var jsonRaw="";


 $.ajax(
 	{
 		contentType: 'application/json; charset=UTF-8',
 		ifModified:true,
 		async:false,
 		url: "/templates/functions.php?NeedHomeJson=True",
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

	//#Home


	if(jsonRaw)
	{
		var index=0;
		var node="<li>11</li>";
		var selnode='<li style="background:white;color:white;">11</li>';
		
		var trc="";

		$("#dljdText li span").fadeOut(100,function(){
			$("#dljd1 span").text(jsonRaw[index]['标题']);
			$("#dljd2 span").text(jsonRaw[index]['副标题']);
			$("#dljd3 span").text(jsonRaw[index]['内容']);

			if($("#dljd2 span").text().length === 0 && $("#dljd3 span").text().length === 0){

				$("#dljd1").css("padding-top","35%");
			}else{
				$("#dljd1").css("padding-top","0px");
			}
				
			$("#playPics").html('<img style="min-height: 100%;" src="http://'+window.location.host+'/templates/functions.php?HomeFirstPic='+jsonRaw[index]['id']+'">');
			
			
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
//###################################################################################################################################################

		var timerId=undefined;
		
		$(window).scroll(function(e){

			var winBot=$(window).scrollTop() + $(window).height();
			var txtBot=$("#DalianJunda").offset().top + $("#DalianJunda").outerHeight();
			var txtPending=0;
			//opacity inc
			if(winBot>=$("#DalianJunda").offset().top+txtPending  && winBot<txtBot+txtPending){

				var cof1=Math.sin(  (winBot-$("#DalianJunda").offset().top-txtPending)  / $("#DalianJunda").outerHeight()*(Math.PI/2) );

				$("#dljdText li").css({


					"opacity":cof1

				});

				$("#dljdText").css({

					"left":(cof1-1)*100

				});
			}
			//opacity dec
			else if($(window).scrollTop()>=$("#DalianJunda").offset().top && $(window).scrollTop()<txtBot){

				var cof2=Math.sin(  (txtBot-$(window).scrollTop())  / $("#DalianJunda").outerHeight()*(Math.PI/2) );

				$("#dljdText li").css({

					"opacity":cof2,

				});

				$("#dljdText").css({

					"left":(cof2-1)*100

				});

			}

			//opacity = 1
			else if(winBot >= txtBot+txtPending && $(window).scrollTop()<$("#DalianJunda").offset().top+txtPending){
				
				if(timerId === undefined){
					timerId=window.setInterval(
				
						function(){


							$("#dljdText li span").fadeOut(500,function(){
								$("#dljd1 span").text(jsonRaw[index]['标题']);
								$("#dljd2 span").text(jsonRaw[index]['副标题']);
								$("#dljd3 span").text(jsonRaw[index]['内容']);

							if($("#dljd2 span").text().length === 0 && $("#dljd3 span").text().length === 0){

								$("#dljd1").css("padding-top","35%");
							}else{
								$("#dljd1").css("padding-top","0px");
							}
							
								$("#playPics").html('<img style="min-height: 100%;" src="http://'+window.location.host+'/templates/functions.php?HomeFirstPic='+jsonRaw[index]['id']+'">');
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

				$("#dljdText li").css({

					"opacity":"1",
			
				});

				$("#dljdText").css({

					"left":0

				});
			}

			//opacity = 0
			else
			{
				clearInterval(timerId);

				timerId = undefined;

				$("#dljdText li").css({

					"opacity":"0",
				});

				$("#dljdText").css({

					"left":"-100%"

				});
			}
		
		});

	}


	$(".HomeTop").css({
							"height":$(window).height()-$("#sidebar1").height()-$("#HeaderPic").height()/*-$(".PathBar").outerHeight()+14*/,
							"min-height":500
						});



	$("#dljdLOGO img").css({
							
							"height":$("#DalianJunda").height()-parseInt($("#dljdLOGO").css("top").replace("px", ""))*2

							});

	$("#playPics img").css({
							
							"height":$("#DalianJunda").height()-parseInt($("#dljdLOGO").css("top").replace("px", ""))*2

							});

/*
	$("#about2").css({

						"height":$("#HomeSectionAbout").outerHeight() - $("#about1").outerHeight()- $("#about3").outerHeight()
						 - parseInt($("#aboutText").css("margin-top").replace("px", ""))
						 	- parseInt($("#about3").css("margin-top").replace("px", ""))
						 		- parseInt($("#about2").css("margin-top").replace("px", ""))
							 		- parseInt($("#about1").css("padding-top").replace("px", ""))
									 	- parseInt($("#about3").css("padding-top").replace("px", ""))
									 		- parseInt($("#about2").css("padding-top").replace("px", ""))
									 			- parseInt($("#about1").css("padding-bottom").replace("px", ""))
												 	- parseInt($("#about3").css("padding-bottom").replace("px", ""))
												 		- parseInt($("#about2").css("padding-bottom").replace("px", ""))
												 			-100


					});


	$(".PathBar").css({

					"background-color":"rgba(255, 255, 255, 0.7)"
				});
*/
	$(window).scroll(function(e){

		var winBot=$(window).scrollTop() + $(window).height();

		//HomeForthHire

		var eleBot=$("#HomeForHire").offset().top + $("#HomeForHire").outerHeight();
		var elePending=$("#HomeForHire").outerHeight()/2;

		//opacity inc
		if(winBot>=$("#HomeForHire").offset().top+elePending  && winBot<eleBot+elePending){
			$("#HomeForHire li").css("opacity",Math.sin(  (winBot-$("#HomeForHire").offset().top-elePending)  / $("#HomeForHire").outerHeight()*(Math.PI/2) ));
		}
		//opacity dec
		else if($(window).scrollTop()>=$("#HomeForHire").offset().top && $(window).scrollTop()<eleBot){
			$("#HomeForHire li").css("opacity",Math.sin(  (eleBot-$(window).scrollTop())  / $("#HomeForHire").outerHeight()*(Math.PI/2) ));
		}

		//opacity = 1
		else if(winBot >= eleBot+elePending && $(window).scrollTop()<$("#HomeForHire").offset().top+elePending){
			$("#HomeForHire li").css("opacity","1");
		}

		//opacity = 0
		else
		{
			$("#HomeForHire li").css("opacity","0");
		}

	});
});