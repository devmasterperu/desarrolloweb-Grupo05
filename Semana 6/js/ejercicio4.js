


var numero_1 = parseInt(prompt('Ingrese un primer número'));
var numero_2 = parseInt(prompt('Ingrese un segundo número'));

while(numero_1<numero_2){
	numero_1++;

	if(numero_1%2 == 0){
		console.log("el numero "+numero_1+" es pares");
	}
}

