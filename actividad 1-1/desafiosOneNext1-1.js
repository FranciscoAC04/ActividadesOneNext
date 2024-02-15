//10 desafios One Next Iniciando con JAVASCRIPT


//1. Muestra una alerta con el mensaje "¡Bienvenida y bienvenido a nuestro sitio web!"
alert('¡Bienvenida y bienvenido a nuestro sitio web!');

//6. Muestra una alerta con el texto "¡Error! Completa todos los campos"
alert('¡Error! Completa todos los campos');



//2.Declara variable y valor "nombre = luna"
let nombre = "luna";
console.log(nombre);
//3. Declara variable y valor "edad = 25"
let edad = 25;
console.log(edad);
//4. Declara variable y valor "numeroDeVentas = 50"
let numeroDeVentas = 50;
//5. Declara variable y valor "saldoDisponible = 1000" 
let saldoDisponible = 1000;
/* 
7. Declara una variable llamada mensajeDeError y asígnale el valor "¡Error! Completa todos los campos".
Ahora muestra una alerta con el valor de la variable mensajeDeError 
*/
let mensajeDeError = "Error! Completa todos los campos";
alert(`mensaje ${mensajeDeError}`);
//8. Utiliza un prompt para preguntar el nombre del usuario y almacénalo en la variable nombre
nombre= prompt("El nombre del usuario: ");
console.log(nombre);
//9. Pide al usuario que ingrese su edad usando un prompt y almacénala en la variable edad
edad = prompt("ingrese su edad");
console.log(edad);
//10. Ahora, si la edad es mayor o igual a 18, muestra una alerta con el mensaje "¡Puedes obtener tu licencia de conducir!".
if (edad >= 18 ) {
    alert ('Puedes obtener tu licencia de conducir');
}