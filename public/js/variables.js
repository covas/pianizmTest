var notasPiano = ["C2", "C#2" ,"D2" , "D#2" , "E2" , "F2" , "F#2" , "G2" , "G#2", "A2" , "A#2" , "B2","C3", "C#3" ,"D3" , "D#3" , "E3" , "F3" , "F#3" , "G3" , "G#3", "A3" , "A#3" , "B3","C4", "C#4" ,"D4" , "D#4" , "E4" , "F4" , "F#4" , "G4" , "G#4", "A4" , "A#4" , "B4","C5", "C#5" ,"D5" , "D#5" , "E5" , "F5" , "F#5" , "G5" , "G#5", "A5" , "A#5" , "B5" , "C6", "C#6" ,"D6" , "D#6" , "E6" , "F6" , "F#6" , "G6" , "G#6", "A6" , "A#6" , "B6" ] ;
var pianoNotesOn= [0, 0 ,0, 0 , 0 , 0 , 0 , 0 , 0, 0 ,0 , 0 ,0, 0, 0 , 0 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0 , 0 , 0 , 0 , 0  , 0  , 0  , 0 , 0  , 0,0 , 0 , 0 ,0 , 0  , 0 , 0 , 0  , 0, 0  , 0 , 0 ,0  , 0 , 0, 0, 0 ,0, 0 , 0 , 0 , 0 , 0 , 0, 0 , 0 , 0 ] ;

var loopCont= 0 ; 

var bWrapper ; 	

var mouseX ; 
var mouseY ; 

var explorador ;
var message = new Message ( 10 , 10 , "hello covas") ;

//detect zoom
var prevWidth = window.innerWidth ;  
		
var isPlaying = false ;

var int2 = self.setInterval("isReady()", 1 );
var int3 = self.setInterval("checkZoom()", 500 );
var int1 ;
 
var songPercentage = 0 ;

// Acor vars
var trebleEvent = new Array () ;
var bassEvent = new Array () ;
var cir ; 
var but ; 
var arr ; 
var active = false ; 
var songLength ; 
var ready ; 
var time ;
var flag ;
var buttonColor = "#E0DEDE"; 
var closeColor = "#0000FF" ; 
var openColor = "#CC0000" ; 
var refColor = "#000000" ; 
var showingReference = 0 ; 

// with canvas background or an image 
var canvasBackground = true ;
var withBackground = false ;
var treble1 = "treble1" ;
var bass1 = "bass1" ; 

var currentCanvas = 0 ; 
var first = true ;

var songTempo = 120;
var numberOfCanvas = 2; 
var precisionTimeout = 10 ;

var aCanvas = new Array () ;
var colorC = 127 ;

var loops = new Array ( ) ;  
var swapMode = 2 ; 
