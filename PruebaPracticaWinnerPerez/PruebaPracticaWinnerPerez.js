alert("Este algoritmo esta diseñado por Winner Perez Espinal")


// En esta parte le pido informacion a usuario
let nombre = prompt("Digita tu nombre");
let edad = Number(prompt("Digita tu edad"));

//LE pido al usuario que digite la edad de nuevo si esta fuera de rango 1 - 120
while (edad <1 || edad >120) {
    alert("El rangon de edad es de 1 a 120 años.");
    edad = Number(prompt("Digita tu edad"));
}


let numero1 = Number(prompt("Digita un primer numero"));
let numero2 = Number(prompt("DIgita un segundo numero"));


//Le pido al usuario que elija una de las 4 opciones 
let operaciones = Number(prompt("Digite el numero de opcion.   1=Suma   2=Resta   3=Multiplicacion    4=Divicion"));

//En dado caso que el usuario no elija una de las opciones  se repite de nuevo
while(operaciones <1 || operaciones >4) {
alert("Digita una opcion de las ya dadas que este entre el rango de 1 a 4");
operaciones = Number(prompt("Digite el numero de opcion.\n   1=Suma\n  2=Resta \n   3=Multiplicacion \n   4=Division"));
}

// Aqui se muestran las opciones comparando los numero que eligio el usuario
if (operaciones === 1) {
alert(`La suma de ${numero1} y ${numero2} es igual a ${numero1 + numero2}`)
}
else if (operaciones === 2) {
alert(`La resta de ${numero1} y ${numero2} es igual a ${numero1 - numero2}`)
}
else if (operaciones === 3) {
alert(`La multiplicacion de ${numero1} y ${numero2} es igual a ${numero1 * numero2}`)
} else {
if (numero2 === 0) {
    alert("La divisison entre 0 es indefinida")
}else{   
 alert(`La division de ${numero1} y ${numero2} es igual a ${numero1 / numero2}`)
}
}



alert(`Muchas gracias ${nombre}`);