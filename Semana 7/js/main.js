/* Pruebas de resultado, previews de datos */
//console.log(123);
//alert("Hola Mundo");

/* Cadena de texto o String */
var nombre = "Javier Diaz";
/* Tipo Number o numero*/
var edad = 22;
/* Tipo boolean true/false */
var vivo = true;

// parseInt convierte un string en un numero entero
// parseFloat convierte un string en un numero incluye decimales
// Number cobnvierte un string en un numero 

//console.log(parseInt(edad));


var numero_1 = 10;
var numero_2 = 30;

var suma = numero_1 + numero_2;

//alert(suma);

// > mayor que
// < menor que 
// >= mayor igual que
// <= menor igual que
// == igual 
// != diferente

//&& AND (y)
// || OR (o)
/*
if(suma >= 50 && numero_1 > 0){
	//ejecute accion
	console.log('La suma es mayor o igual a 50 y el primer numero es positivo');
}else{
	console.log('La suma es menor a 50 y el primer numero es negativo')
}*/

/*
if( edad >= 18){
	console.log('Eres mayor de edad');

	if(edad < 26){
		console.log('Eres aun joven');
	}else{
		console.log('te estas volviendo viejo');
	}

}else{
	console.log('Ya estas viejo');
}*/


switch (true){
	case (edad>=18):
		//console.log('eres mayor de edad');
	break;
	case (edad<24):
		//console.log('eres joven aun');
	break;
	case (50):
		//console.log('uy ya te estas volviendo viejo');
	break;
	default:
		//console.log('tu edad es neutra');
	break;
}


var monto = 10;

for (var i = 0; i <= monto ; i++){
	//console.log(i);
}



while ( monto < 20 ){
	//console.log('resultado');
	monto++
}

/*
var number = 200;

do{
	console.log(number);
	number++;	
}while(number<220);

*/
//var resultado = confirm('¿Estas seguro de realizar esto?');

//console.log(resultado);

//var dni = prompt('Ingresa tu dni',73223892);

//console.log(parseInt(dni));

//console.log("Este es el numero mayor: "+ numero);


/*
var numero_1 = parseInt(prompt('Ingrese un primer número'));
var numero_2 = parseInt(prompt('Ingrese un segundo número'));
*/

function operacion( numero_1, numero_2 ){
	
	if( numero_1 > numero_2){

		console.log("El Número "+numero_1+" es el mayor");

	}else if(numero_2 > numero_1){

		console.log("El Número "+numero_2+" es el mayor");

	}
}

operacion(152,16);

var dia1 = "Lunes";
var dia2 = "Martes";
var dia3 = "Miercoles";

var diasemana = ["Lunes", "Martes", "Miercoles", "Jueves"];

for (var i = 0; i < diasemana.length; i++){
	console.log(diasemana[i], i);
}


document.getElementById('demo').innerHTML = "Hola Mundo";


$(document).ready(function(){


	$('#demo').html('Hola mundo con jquery');

	$('#demo').click(function(){

		$(this).addClass('activo');

	});

});









