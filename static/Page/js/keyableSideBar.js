/*
 * _mark() //after selected <li a >
 * 
 * _selectRight() //first time select
 * 		->selHelper()
 * 
 * _clicks() and _keys() //further select
 */ 

var file;
var navbar = "#sidebar1";
var thebody = "#Sections";
var root = "Home";
var thetitle="-Freddie's Personal Website";

function restoreClickBehav(sel){
	$(sel).css({"background-color":"#2A2A2A","color":"#FFF"});
}

function performClickBehav(sel){
	$(sel).css({"color":"#000","background":"#FFF"});
}


function behav(){
	
	$(thebody).fadeOut(500, function(){/*document.getElementById("homeVideo").pause();*/});
	_ajax($("#selected").attr('alt'));
	//console.log("alt: "+$("#selected").attr('alt'));
	$(thebody).fadeIn(500);
}

function _ajax(_url){
	file=_url;
    $.ajax(
    		{
    			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    			ifModified:true,
    			async:false,
    		    //data : {'csrfmiddlewaretoken': '{{ csrf_token }}'},
    			url: _url,//window.location.hostname.concat(":8000/home/"),
    			type:"GET",
    			cache:false,
    			dataType:'html',
    			success: function(response){
    			
    				//console.log("success!");
    				//console.log(response);
    		
    				$(thebody).html(response);
    
    			},
    			
    			error:function(error){
    				alert(error.status);
    				//console.log(window.location.hostname.concat(":8000/home/")); 
    				//console.log("crsf: "+$("#crsf").text());},
    			
    			//beforeSend: function(xhr){xhr.setRequestHeader('X-CSRF-Token',$("#crsf").text())
    			},
    		}
    	);
}

function _mark(){
	
	if($("#selected").attr("alt")===file){
		return false;
	};
	
	behav();
}

function _selectRight(){

	var pathArray = window.location.pathname.split( '/' );
	var _location = pathArray[1];
	
	if(_location){
		_selHelper(_location);
	}
	else{
		_selHelper(root);
	}
	
};

function _selHelper(_location){
	
	$(navbar+" nav ul li").each(function(){
		
		if($(this).children().text() === _location)
		{
			//console.log($(this).children().text());
			if(document.getElementById("selected") === null){
				$(this).children().attr("id","selected");
			};

			$("title").text($("#selected").text()+thetitle);
			performClickBehav("#selected");
			
			return false;
			
		};

	});
	
}

function _keys(){
		
	var sel;
	var timer;
	var kr = true;
	var kl = true;
	
	$(document).keydown(function(e){
		if((e.which === 37)||(e.which === 39))
		{
			sel = document.getElementById("selected");
			sel.removeAttribute("id");
			restoreClickBehav(sel);
			sel = $(sel).parent();
		
			switch(e.which) {
	 			   case 37:
							if(sel.prev().text().length > 0)
							{
									sel = sel.prev();
								
				
							}else{
									sel.parent().attr("id","selected");
									sel = $("#selected li").last();
									document.getElementById("selected").removeAttribute("id");								
							}
							clearTimeout(timer);
							kl = false;
						break;
	 			   case 39:
							if(sel.next().text().length > 0){
									
									sel = sel.next();
							}else{
					
									sel.parent().attr("id","selected");
									sel = $("#selected li").first();
									document.getElementById("selected").removeAttribute("id");
								
							};
							clearTimeout(timer);
							kr = false;
						break;
			};
	
			sel.children().attr("id","selected");
			performClickBehav("#selected");
		};
	}).keyup(function(ev){
		
		
	switch(ev.which) {
 			   case 37:
						kl = true;
        				break;
 			   case 39:

						kr = true;
        				break;
		};
	



		if(((ev.which === 37)||(ev.which === 39))&&(kr&&kl))
		{
			timer = setTimeout(function(){
				
				_mark();

			},500);
		};	
		
		});
};

function _clicks(){

	$("#sidebar1 nav ul li a").on("click",function(e){

		if($(this).attr("alt")===$("#selected").attr("alt")){
			return false;
		};
		
		restoreClickBehav("#selected");
		document.getElementById("selected").removeAttribute("id");
		$(this).attr("id","selected");
		performClickBehav("#selected");
		_mark();

	});
};

$(document).ready(function() {
	
	$(thebody).hide();

	//$(navbar).headroom();
	
	_selectRight()
	
	//First time, _mark() without fadeout()
	_ajax($("#selected").attr('alt'));
	//console.log("alt: "+$("#selected").attr('alt'));
	$(thebody).fadeIn(500);
	
	_keys();
	_clicks();
	

});