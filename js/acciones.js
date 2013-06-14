// JavaScript Document
function LoginConectar (U, P)//PRIMERO VA ARECIBIR DOS COSASA DESPUES SE CREA UNA CADENA SE AGREGA CON & POR QUE ES COMO UN CADENA
   {
	   datos="usuario="+U+"&password="+P;//va a ser lo que contengas cada caja de texto de password
	   $.ajax({//VARIABLE DE AJAX PERMITE CONECTARSE CON EL  SERVIDOR Y REGRESA UN RESPUESTA
		      type:"POST",//ENVIA ALGO POR POST
 			  url: "http://192.168.1.188/Sitio6_n/Log_in_m.php",//ALGO ES UNA DIRECION EN INTERNET se le tiene que poner todo este proceso por que este no lo reconose dolo diiciendole que es localhost y no                                                             tiene que ser una ruta muy especifivcada
			  data: datos
			  
   }).done(function(msg){ alert(msg);//SE BUSCA LA FUNCION CON EL MENSAJE QUE ME ENVIO 
      if (msg=="" || msg == null)//CHECA SI EL MSG ESTA VASIO O TIENE ALGO PERO TIENE QUE REVISAR SI ES CORRECTO O NO 
	     {
			 alert ("Usuario incorrecto");
		 }
		 else
		 {
			 alert ("BIENVENIDO");
		 }
   });
   }
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('.Enviar').tap(function(){
			var formulario = $(this).parents('form');
			var usuario = document.getElementByID('Usuario').value;
			var password =  document.getElementByID('Password').value;
			
			LoginConectar(usuario, password)
			
         });//tap
        });//device ready
});