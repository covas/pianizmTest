function initCanvas ( id , w , h , a ) { 
	var canvas = document.getElementById( id );
	var context = canvas.getContext("2d");
	context.canvas.width  = w ;
  	context.canvas.height = h;
  	context.globalAlpha = a ; 
}

init = function () {	
 	 
	identifyBrowser () ; 

	if ( canvasBackground ) {
	  	initCanvas ( "staticPiano" , 1400,  500 , 1 ) ; 
		// setVisibility ( "staticTreble" , "hidden") ;
  	}
  	else { 
  		withBackground = true ; 
  	}
   
  	
	for ( var i = 0 ; i < numberOfCanvas ; i ++ ) { 
		var num = i+1 ; 
		var name = "piano"+num ; 
		initCanvas ( name , 1400 , 500 , .8 ) ;
	}  		
  		
	// init arrays 
	var buttonColor = "#E1DEDE" ;
	
	but = new Array () ; 
	cir = new Array () ; 
	
	var r = 17  ;
	var startx = 0 ; var starty = 100 ; 
	
	var notes = ["C", "D" ,"E" , "F" , "G" , "A" , "B"] ; 
	// notas blancas
	var octava = 1 ; 
	var white = 1 ; 
	for ( var i = 0 ; i < 35 ; i ++ )  {
		if ( (i%7) == 0 )
			octava ++ ; 
		var pos = i%7  ;
		var nombre = notes [pos] ; 
		nombre+= octava ;  
		circle = new Circle ( startx+(i*38) , starty , white , nombre , 0  , "#ffffff" ) ; 
		cir.push ( circle ) ; 
		circle.render () ; 
	}


	var bnotes = ["C#", "D#" ,"E#" , "F#" , "G#" , "A#" , "B#"] ;
	// notas negras
	octava = 1 ; 
	white = 0 ;  
	for ( var i = 0 ; i < 35 ; i ++ )  {
		if ( (i%7) == 0 )
			octava ++ ; 
		var pos = i%7  ;
		var nombre = bnotes [pos] ; 
		nombre+= octava ;  
		if ( nombre[0] == 'E' && nombre[1] == '#')
			continue ; 
		if ( nombre[0] == 'B' && nombre[1] == '#')
			continue ;
			
		circle = new Circle ( startx+(i*38)+28 , starty , white , nombre , 0  , "#000000" ) ; 
		cir.push ( circle ) ; 
		circle.render () ; 
	}
	
	r = 15 ; 
	withBackground = true ; 
}

function init2 () {
	//alert ( length ) ; 
	
}
