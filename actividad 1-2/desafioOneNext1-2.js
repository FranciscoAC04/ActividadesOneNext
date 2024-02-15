//1.Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let diaDeSemana = prompt ("Que dia de la semana es?: ");

if (diaDeSemana === 'sabado') {
    alert ('¡Buen fin de semana!');
} else {
    if (diaDeSemana === 'domingo'){
        alert ('¡Buen fin de semana!');
    }else{
        alert ('¡Buena semana!');
    }
}

//2.Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numero = prompt("ingresa un numero");

if (numero > 0){
    alert(`el numero es ${numero} positivo`);
}else{
    alert(`el numero es ${numero} negativo`);
}

 
//3.Crea un sistema de puntuación para un juego. 
//Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". 
//En caso contrario, muestra "Intenta nuevamente para ganar."

 let puntuacion = prompt("¿Cual es tu puntuaciopn Usuario?");

 if (puntuacion >= 100){
    alert(`Tu puntuacion es de ${puntuacion}. ¡Felicidades, has ganad0!`);
 }else{
    alert(`Tu puntuacion es de ${puntuacion}. Intenta nuevamente para ganar.`);
 }

//4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

let saldoDeCuenta = prompt("Ingrese su Saldo de cuenta: ");

alert(`Tu saldo actual es de $${saldoDeCuenta} pesos  `); 

//5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.

let nombre = prompt("Ingrese su nombre Usuario: ");
alert(`Hola ${nombre}, bienvenido nuevamente `); 