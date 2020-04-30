// PRIMERA PARTE

//let nombre = prompt("digita tu nombre");
//let edad = Number.parseInt(prompt("Digita tu edad"));
//let estadoCivil = prompt("Digite su estodo civil");


// Estudiante
/*
let estudiante = {
    nombre: prompt("Como te llamas?"),
    edad: prompt("Que edad tienes?"),
    curso: prompt("Cual es tu curso?")
};
*/

//let estudiante = {};

//estudiante.nombre = prompt("Dime tu nombre");
//estudiante.edad = prompt("Dime tu edad");
//estudiante.curso = prompt("Cual es tu curso");

//console.log(typeof estudiante);



// SEGUNDA PARTE
/*
// Declarar la variable
let añoActual = 2020;
let añoñNacimiento = prompt("En que año naciste");


// Imprimi la variable por la consola
console.log(añoActual);
console.log(añoñNacimiento);


// Calcular la edad actual
let edadActual = añoActual - añoñNacimiento;

// Mostara alerta la edad actual
alert (`Mi edad actual es ${edadActual} años.`);
*/


// TERCERA PARTE

/*
// Declarar la variable
let nombre = prompt("Como te llamas?");
let edad = Number.parseInt( prompt("Que edad tienes?"));
let monto = Number.parseInt( prompt("Que cantidad tienes en peso"));

// mostrar po consola 
console.log(nombre);
console.log(typeof edad);

// Tasa del dollar y el resultado de la monto y tasaDollar
let tasaDollar = 54.3;
let conversionEnDollar = monto / tasaDollar;

// console.log(`La conversion es ${conversionEnDollar.toFixed(2)}`)


//"haz digitado 100 pesos. La tasa del Dollar es: 54.3. Tu cpnvercion es igual a 1.84"

// Mostrar por consola el mensaje poniendo en practica el temple string y usando tofiex.
console.log(`Haz digitado ${monto} pesos. La tasa del Dollar es ${tasaDollar}. Tu conversion es igual a ${conversionEnDollar.toFixed(2)}`);
*/



// CUARTA PARTE

// Declare las varaiables
// converti string a number
// Le pido informacion al usuario
let numero1 = Number.parseInt( prompt("Numero que deseas calcular. ejem.(20)"));
let numero2 = Number.parseInt( prompt("otro numero. ejem.(10)"));

// imprimiendo la suma 
let suma = numero1 + numero2;


// Mostrar una alerta para identificar el resultado final
alert(`La suma de ${numero1} mas la suma de ${numero2} es igual a ${suma}`);