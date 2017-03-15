


$(function () {
var d = new Date();
$("#resultado").text(d.toUTCString());

var valorActual="0";
var valorMemoria="0";
var operacion = "";


$(".botonnum").click(function(){

	if(valorActual!= "0")
		valorActual = valorActual+this.value;
	else
		valorActual=this.value;
	
	
	$("#resultado").text(valorActual);

});


$(".botonop").click(function(){
	
		if(operacion == ""){
		valorMemoria = valorActual;
		valorActual="0";
		$("#resultado").text(valorActual);
		switch(this.value){
			case "+":
				operacion="+";
			break;
			case "-":
				operacion="-";
			break;
		}

	}
});


$(".botonigual").click(function(){

	if(operacion != "");{

	switch(operacion){
	
		case "+":
			
				valorActual=parseInt(valorActual)+parseInt(valorMemoria);
			
				break;
		case "-":
			
				valorActual=parseInt(valorMemoria)-parseInt(valorActual);
				
				break;
				}
				valorMemoria="0";
				operacion= "";
				$("#resultado").text(valorActual);
	}			
				
});	  


$("#botonc").click(function(){
		valorActual="0";		
		$("#resultado").text(valorActual);


});

});






