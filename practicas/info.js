/*

// Declare el array con los dias de la semana agregandolo con push
let diasSemana = [];

diasSemana[0] = prompt("Digita el primer dia de la semana");
diasSemana.push( prompt("Digita el segundo dia de la semana"));
diasSemana.push( prompt("Digita el tercer dia de la semana"));
diasSemana.push( prompt("Digita el cuarto dia de la semana"));
diasSemana.push( prompt("Digita el quinto dia de la semana"));
diasSemana.push( prompt("Digita el sexto dia de la semana"));
diasSemana.push( prompt("Digita el septimo dia de la semana"));
// mostrar por consola si deea
//console.table(diasSemana);

// array con 3 nombres de la familia agragandolo con push
let nombreFamilia = [];

nombreFamilia[0] = prompt("Digita el nombre de tu Papa");
nombreFamilia.push( prompt("Digita el nombre de tu Mama"));
nombreFamilia.push( prompt("Digita el nombre de tu hermano/a"));
//Ver por cosola los nombres escritos
console.table(nombreFamilia);   

*/


/* Denntro de la variable declrare dos arrays mas que son comidasFavortitas y pasisesVisitar 
lo demas esta bien  */
let datosPersonales = {
    nombre: prompt("Dime tu nombre completo"),
    fechaNacimiento: prompt("Dime tu fecha de nacimiento"),
    edad: prompt ("Dime tu edad"),
    comidaFavorita: [],
    paisesVisitar: [],
    poseesLicenciaConducir: confirm("¿Tienes licencia de conducir. (Aceptat = true / Cancelar = false) "),
    universidad: confirm("Vas a la universidad. (Aceptar = true / Cancelar = false)")
};

// Esta es la informacion que va al array de datosPersonales.comidaFavorita
datosPersonales.comidaFavorita.push(prompt("Digita tu primera comida favorita"));
datosPersonales.comidaFavorita.push(prompt("Digita tu segunda comida favorita"));
datosPersonales.comidaFavorita.push(prompt("Digita tu tercera comida favorita"));

// Esta es la informacion que va al arra de datosPersonales.paisesVisitar
datosPersonales.paisesVisitar.push(prompt("Digita el primer pais que te gustaria visitar"));
datosPersonales.paisesVisitar.push(prompt("Digita el segundo pais que te gustaria visitar"));
datosPersonales.paisesVisitar.push(prompt("Digita el tercer pais que te gustaria visitar"));
datosPersonales.paisesVisitar.push(prompt("Digita el cuarto pais que te gustaria visitar"));
datosPersonales.paisesVisitar.push(prompt("Digita el quinto pais que te gustaria visitar"));

// Cambien la propiedad de string a number
datosPersonales.edad = Number.parseInt(datosPersonales.edad);


