$(document).ready(function(){

$(".cs").hide();

//if Desktop:

$("#email").css("width","300px");

$(".cs form textarea").css({"width":"100%","height":"200px","resize":"vertical"});

$("#startC").css({"padding-top":"10px", "padding-bottom": "10px"});


	//Div background:



	
	//Action:
	$("#startC").focus(function(){

	$("#startC").hide();

	$(".cs").show("slow");

});



//if Mobile:


//Test
console.log("success");

});
