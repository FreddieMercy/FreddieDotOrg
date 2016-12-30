/*
 * _mark() //after selected <li a >
 * 
 * _selectRight() //first time select
 * 		->selHelper()
 * 
 * _clicks() and _keys() //further select
 */ 

var file;

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
    		
    				$("#container").html(response);
    
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
	
	$("#container").fadeOut(500, function(){/*document.getElementById("homeVideo").pause();*/});
	_ajax($("#selected").attr('alt'));
	//console.log("alt: "+$("#selected").attr('alt'));
	$("#container").fadeIn(500);
}

function _selectRight(){

	var pathArray = window.location.pathname.split( '/' );
	var _location = pathArray[1];
	
	//console.log(pathArray);
	//console.log(window.location);
	//console.log("_location: "+_location);
	
	if(_location){
		_selHelper(_location);
	}
	else{
		_selHelper("Home");
	}
	

};

function _selHelper(_location){
	
	$("#sidebar1 nav ul li").each(function(){
		
		if($(this).children().text() === _location)
		{
			//console.log($(this).children().text());
			if(document.getElementById("selected") === null){
				$(this).children().attr("id","selected").css({"color":"#000","background":"#FFF"});
			};

			$("title").text($("#selected").text()+"-Freddie's Personal Website");
			
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
			sel = $(sel).css({"background-color":"#2A2A2A","color":"#FFF"}).parent();
		
			switch(e.which) {
	 			   case 37:
							if(sel.prev().text().length > 0)
							{
									sel = sel.prev();
									sel.children().css({"color":"#000","background":"#FFF"});
								
				
							}else{
									sel.parent().attr("id","selected");
									sel = $("#selected li").last();
									document.getElementById("selected").removeAttribute("id");
									sel.children().css({"color":"#000","background":"#FFF"});
								
							}
							clearTimeout(timer);
							kl = false;
						break;
	 			   case 39:
							if(sel.next().text().length > 0){
									
									sel = sel.next();
									sel.children().css({"color":"#000","background":"#FFF"});	
							}else{
					
									sel.parent().attr("id","selected");
									sel = $("#selected li").first();
									document.getElementById("selected").removeAttribute("id");
									sel.children().css({"color":"#000","background":"#FFF"});
								
							};
							clearTimeout(timer);
							kr = false;
						break;
			};
	
			sel.children().attr("id","selected");
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
				$("#selected").css({"background-color":"#2A2A2A","color":"#FFF"});
				document.getElementById("selected").removeAttribute("id");
				$(this).css({"color":"#000","background":"#FFF"}).attr("id","selected");
				_mark();

	  });
};

$(document).ready(function() {
	
	$("#container").hide();

	$("#sidebar1 nav a").hover(function(){
					$(this).css({"background-color":"#FFF","color":"#000"});
    					
				             },function(){
								if($(this).attr("id") !== "selected")
								{
								$(this).css({"background-color":"#2A2A2A","color":"#FFF"});
								};
	});	

	$("#sidebar1").headroom();
	
	_selectRight()
	
	//First time, _mark() without fadeout()
	_ajax($("#selected").attr('alt'));
	//console.log("alt: "+$("#selected").attr('alt'));
	$("#container").fadeIn(500);
	
	_keys();
	_clicks();
	

});
