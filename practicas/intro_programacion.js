// BASICOS
/*
// Mayor de edad
alert("Eres mayor de edad?")
let edad = Number(prompt("Dime tu edad"));

if (edad >= 18) {
alert("Eres mayor de edad")
}else{
    alert("Eres menor de edad")
}


// 1 al 7 Dia semana


const diaSemana = [0];
diaSemana.push("Domingo");
diaSemana.push("Lunes");
diaSemana.push("Martes");
diaSemana.push("Miercoles");
diaSemana.push("Jueves");
diaSemana.push("Viernes");
diaSemana.push("Sabado");

let numeroDia = Number(prompt("Dime un nuemo que equivalva a un dia de la semana (Domingo = 1)"));
let dias = (diaSemana[numeroDia])

alert ("El dia que seleccionaste fue " + dias )



// 1 al 12 Meses del año.
const mesesAno = [0];
mesesAno.push("Enero");
mesesAno.push("Febrero");
mesesAno.push("Marzo");
mesesAno.push("Abril");
mesesAno.push("Mayo");
mesesAno.push("Junio");
mesesAno.push("Julio");
mesesAno.push("Agosto");
mesesAno.push("Septiembre");
mesesAno.push("Octubre");
mesesAno.push("Noviembre");
mesesAno.push("Diciembre");

let meses = prompt("Dime un numero que equivalga a un mes del año")
let numeroMeses = (mesesAno[meses]);
alert("Seleccionaste el mes de " + numeroMeses);
*/



// CALCULO

/*
// Par o impar
let one1 = Number(prompt("Digita un numero"));
if (one1 %2 == 0) {
alert("El numemo es par")
}else{
alert("No es par")
}

//AREA de un cuadrado
let ladoCuadrado = Number(prompt("Digita un numero que equivale a un lado del cuadrado"));
let resultadoCuadrado = ladoCuadrado ** 2;
alert("El area de tu cuadrado es " + resultadoCuadrado);


// Multiplicar sin el signo de multiplicacion

let numeroMulti1 = Number(prompt("Digita el primer numro a multiplicar"));
let numeroMulti2 = Number(prompt("Digita nuermo a cual quieras elevar"));
let valor = 0;

for (let indice = 1; indice <= numeroMulti2; indice++) { 
     valor = valor + numeroMulti1;


    alert(`${numeroMulti1} x ${indice} = ${valor}`);
 }
*/



 // Digital y web

 /*
 //Por extenciones
 let doc = "doc";
 let jpg = "jpg";
 let mp3 = "mp3";
 let xla = "xls";
 let txt = "txt";
 let bmp = "bmp";
 let html = "html";
 let pwt = "pwt";


let dato = prompt("DIgita una extencion");
if (dato == doc ){
alert("es un documento de Word")
}
else if (dato == jpg) {
    alert("es una imagen ")
}
else if (dato == mp3) {
    alert("es un audio")
}
else if (dato == xls) {
    alert("es un archivo de exel")
}
else if (dato == txt) {
    alert("es un texto normal")
}
else if (dato == bmp) {
alert("es una imagen")
}
else if (dato == html) {
    alert("pagina web en html")
} 
else if (dato == pwt) {
    alert("presentacion de power point ")
}





//Cuenta de facebook
let nombre = prompt("Digita tu nombre");
let apellido = prompt("Digita tu apellido");
let gmail = prompt("IDgita tu correo electronico");
let constrasena = prompt("Digita una contraseña");
let fechaNacimietno = prompt("Dime tu fecha de nacimiento");
let tuSexo = prompt("Dime cual es tu sexo");
let nombreCompleto = (nombre + apellido);

alert(`Muchas gracias  ${nombreCompleto} por la informacion`);


// Repetir contrasena

let contrasena1 = prompt("Digita una contraseña");
let contrasena2 = prompt("Repite la contraseña");

while( contrasena2 != contrasena1 ){
    alert("Las contraseñas no coinciden trate denuevo")
    contrasena2 = prompt("Repite la contraseña");

}
alert("Las contrasñas coinciden");


alert("Rellena los datos para poder crear tu cuenta e iniciar")
let nombreUsuario = prompt("Dime tu nombre");
let apellidoUsuario = prompt("Dime tu apellido");
let fechaNacimietnoUsuario = prompt("Dime tu fecha de nacimiento")
let constrasenaUsuario = prompt("Digita una contraseña");

//INICIAR SECION 
alert("Iniciar secion");

let nombreUsuario1 = prompt("Escribe tu nombre ");
let constrasenaUsuario1 = prompt("Repite la contraseña");

while(nombreUsuario1 != nombreUsuario){
alert("Nombre incorrecto debes escribir el mismo nombre que escribiste en rellenar usuario")
nombreUsuario1 = prompt("Escribe tu nombre ");
}
alert("Nombre correcto");
while( constrasenaUsuario1 != constrasenaUsuario ){
alert("Contraseña incorecta debes escribirla igual a la contraseña pedida antes");
constrasenaUsuario1 = prompt("Repite la contraseña");
}
alert("Contraseña corecta.  Haz iniciado seccion");

*/





// ASIGNACION
//Suma
/*
alert("Digita dos numeros para sumar");
let numeroSuma1 = Number(prompt("Digita numero 1"));
let numeroSuma2 = Number(prompt("Digita nuermo 2"));

let resultadoSuma = (numeroSuma1 + numeroSuma2);
alert(`La suma de ${numeroSuma1} y ${numeroSuma2} da ${resultadoSuma}`);


//Resta
alert("Digita dos numeros para restar");
let numeroResta1 = Number(prompt("Digita numrero 1 "));
let numeroResta2 = Number(prompt("Digita numero 2"));

let resultadoResta = (numeroResta1 - numeroResta2);

alert(`La resta de ${numeroResta1} y ${numeroResta2} es ${resultadoResta}`);


//MULTIPLICACION

alert("Digita dos numeros para multiplicar");
let numeroMultiplicar1 = prompt("Digita numero 1");
let numeroMultiplicar2 = prompt("Digita numero 2");

let resultadoMultiplicar = (numeroMultiplicar1 * numeroMultiplicar2);

alert(`La multiplicacion de ${numeroMultiplicar1} y ${numeroMultiplicar2} es ${resultadoMultiplicar}`);


//VAMOS A CALCULAR EL AREA DE UN TECTANGULO



//CALCULAR EL ITBIS A UNA COMPRA DE 2,500 PESOS.
alert("Se va a calcular el itbis a una compra de 2,500");

let itbis1 = 0.18;
let compra1 = 2500;

let resultadoItbis = (itbis1 * compra1);
let resultadoCompra = (compra1 + resultadoItbis);

alert(`A la compra de de ${compra1} se le agrega un itbis de ${resultadoItbis} lo cual hace un pago de ${resultadoCompra} `);
*/

//CICLO FOR
/*
//Numeros del 1 al 10
alert("Apareceran los numeros del 1 al 10");
for (let incremento = 1; incremento <= 10; incremento++) {
    alert(incremento)
}



//Digitar cuantas veces quieres que se repita el numero
let mensaje1 = "numero";
let cantidadVeces1 = Number(prompt("DIgita la cantidad de veces"));

for (let contador1 = 1; contador1 <= cantidadVeces1; contador1++) {
alert(`${mensaje1} ${contador1}`)
}





//DIGITAR EL PRINCIPIO DE UN RANGO Y SU FINAL

let inicio1 = Number(prompt("Digita en que numero quieres que inice"));
let final = Number(prompt("Digita el numero con el que quieras finalizar "))

for (let contadorInicio = inicio1; contadorInicio <= final; contadorInicio++) {
alert(`${inicio1} ${contadorInicio}`)
}
*/


//GEnerar la tabla del 3

// EN  las tablas estoy un poco perdido esto es todo lo que pude hacer




/*
//CICLO WHILE
alert("Escribe dos numeros positivos")
let numeroPositivo = Number(prompt("Digita numero 1"));
let numeroPositivo2 = Number(prompt("Digita numero 2 "));

while ( numeroPositivo < 0 ) { 
alert("Digita el primer numero positivo")
numeroPositivo = Number(prompt("Digita un numero"));

}
while ( numeroPositivo2 <0 ) {
alert("digita el segundo numero positivo")
numeroPositivo2 = Number(prompt("Digita un numero positivo "));

}
alert("Ambos numeros son positivos");
*/