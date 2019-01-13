/*

Pedir dos numeros y muestre por consola cual de estos es el mayor

R: "El Número 15 es el mayor"

*/


var numero_1 = parseInt(prompt('Ingrese un primer número'));
var numero_2 = parseInt(prompt('Ingrese un segundo número'));

if( numero_1 > numero_2){

	console.log("El Número "+numero_1+" es el mayor");

}else if(numero_2 > numero_1){

	console.log("El Número "+numero_2+" es el mayor");

}