function Circle ( x , y , white , name , mouseDown , color  ) {
	this.white = white ;
	this.x = x;
	this.y = y ;
	this.color = color ;
	this.name = name ;
	this.mouseDown = mouseDown ;
	this.def = color ;
	
	this.setX = function ( xp ) {
		this.x = xp ; 
	}
		
	this.toDefault = function ( ){
		this.color = this.def  ; 
	}
	
	this.setColor = function ( color1 ) {
		this.color = color1 ; 
	}
	
	this.setName = function ( name1 ) { 
		name = name1 ; 	
	}
	
	this.render = function() {
		var canvas ; 
		var context ; 
		
		
		// ya se dibujo el fondo
		if ( withBackground ) {
			//canvas = aCanvas [ (currentCanvas+1)%(numberOfCanvas) ] ;
			canvas = aCanvas [currentCanvas] ; 
		}	
		else 
			canvas = document.getElementById ( "staticPiano" ) ;
		
			 
		context = canvas.getContext ( "2d" ) ;

			
		var aux = getCirByName ( name ) ; 
		var centerX = aux.x;
		var centerY = aux.y;
		var radius = aux.r;
		var x = aux.x ; 
		var y = aux.y ; 
		
		/*if ( withBackground == false ) { //( explorador != "firefox") {
			var radgrad2 = context.createRadialGradient( x, y, 15 ,x-30,y-60, 0);
			radgrad2.addColorStop(0, aux.color , .5);
			radgrad2.addColorStop(0.75, "#ffffff" , .5 );
			radgrad2.addColorStop( .5, "#ffffff" , .5);
			context.fillStyle = radgrad2;
		}
		else {*/
			context.fillStyle = this.color ;
		//}	
		
		 context.beginPath();
		 if ( white == 1 )
      		context.rect(centerX, centerY , 38 , 200 );
      	else 
      		context.rect(centerX, centerY , 20 , 100 );
      	
      	context.fill();
      	context.lineWidth = 1;
      	context.strokeStyle = 'black';
      	context.stroke();
		
		/*
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
	 
		//context.fillStyle = radgrad2 ;
		context.fill();
		context.lineWidth = 1;
		context.strokeStyle = "black";
		context.stroke();
		*/
		context.closePath () ; 
		
	}
	
	
	this.renderProcessingTreble = function() {
		if ( name[0] !='b') {
			var aux = getCirByName ( name ) ; 
			ellipseX = aux.x;
			ellipseY = aux.y;
			ellipseC = aux.color ;
		}
		else {
			ellipseC = "esBajo" ; 
		}
		
	}
}