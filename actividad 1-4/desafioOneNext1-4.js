//1.Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

let mensajeBienvenida = 'Bienvenido';

console.log (mensajeBienvenida);

//2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
//3.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let nombre = 'Francisco Omar';

console.log(`"¡Hola, ${nombre}!"`);

alert(`"¡Hola, ${nombre}!"`);

//4.Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

let gustoLenguaje = '';

gustoLenguaje = prompt("¿Cuál es el lenguaje de programación que más te gusta? ");

console.log (gustoLenguaje);

/*5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
  6.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. 
  Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". 
  Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.*/

let valor1 = 8;
let valor2 = 22;
let resultado = 0;

resultado = valor1 + valor2;

console.log(`"La suma de ${valor1} y ${valor2} es igual a ${resultado}`);

resultado = valor1 - valor2;


console.log(`"La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);

//Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

let edad = prompt("¿Cuál es su edad actual? ");

if (edad >= 18 ){
 console.log(`En efecto mi estimado Usted con la edad de ${edad} es Mayor de edad`); 
} else {
    console.log(`Disculpe mi estimado, Usted con la edad de ${edad} es aun menor de edad`); 
}

//Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

let numero = prompt("Ingrese un numero");

if (numero >= 0 ){
 console.log(`El resutado que ingreso fue ${numero} es positivo`); 
} else {
    console.log(`El resutado que ingreso fue ${numero} es negativo`); 
}

//Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

let contador = 1;

while (contador != 10 + 1 ){
console.log(`numero actual es ${contador}`);
  contador ++

}

//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

let nota = 7;

if (nota >= 7 ){
 console.log(`Calificacion fue ${nota} "Aprobado"`); 
} else {
    console.log(`Calificacion fue ${nota} "Reprobado"`); 
}


//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

let numeroAzar = Math.random();

console.log(numeroAzar);

//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

let numeroAzar1 = Math.floor(Math.random()*10);

console.log(numeroAzar1);

//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
numeroIntAleatorio = parseInt(Math.random() * 1000) + 1;
console.log(numeroIntAleatorio);
