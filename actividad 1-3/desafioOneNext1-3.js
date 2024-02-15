
//1.Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 1;

while (contador != 10 ){
alert(`numero actual es ${contador}`);
  contador ++

}

//2.Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

let contadorReversa = 10;

while (contadorReversa >= 0){
alert(`numnero actual es ${contadorReversa}`);
  contadorReversa --

}


//3.Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numUser = prompt("Ingresa un numero");

while ( numUser >= 0){
    console.log(numUser);
    numUser --
}


//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

let numUser2 = prompt("Ingresa un numero");
let ContadorNavegador =0;

while (ContadorNavegador <= numUser2 ){
    console.log(ContadorNavegador);
    ContadorNavegador ++
}
