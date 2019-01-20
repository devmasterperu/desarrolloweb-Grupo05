/*

de todos los numeros ingresados por el usuario ir sumando estos hasta que se 
se ingrese un numero negativo.
luego de esto mostar el promedio de estos.

*/

var suma = 0;
var contador = 0;


do{

	var numero = parseInt(prompt('Ingrese un número que no sea negativo'));


	if(isNaN(numero)){
		numero = 0;
	}else if(numero >= 0){
		suma = suma + numero;
		contador++;
	}


}while(numero>=0)


console.log("La suma de todos los numeros es: "+suma);
console.log("El promedio de estos numeros es: "+(suma/contador) );

