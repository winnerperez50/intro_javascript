// crear un array con los dias de las semana

const diasSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jeves", "viernes", "Sabado"];


// Confirmar que el array este creado correctamente
// console.table(diasSemana);



//crear un array con los miembros de mi familia
// Desde el mas viejo al mas joven

let miembrosFamilia = [
    "Wilfido",  
    "Roxanna",
    "Winner",
    "Wilmer"

];

// Confirmar que el array se creo correctamente

// console.table(miembrosFamilia);;

// Crear un objeto con los daot spersonales
let datosPersonales = {
nombreCompleto: "Winner Ismael Perez Esppinal",
fechaNacimientos: "23 julio 2001",
lugarNacimiento: "Santiago",
eada: 18,
ComidasFavoritas: ["spaguetis", "pan", "habichuela con dulce"],
paisesVisitar: [
"canada",
"japon",
"Europa",
"UUEE",
"alemania"
],

poseesLicenciaConducir: true,
Universidad: true,


};

// confirmar que nuestro obejeto esta correcto

// console.log(datosPersonales);


// crear un objeto con mi artista favorito
let artistaFavorito = {
nombre: "fogiven",
miembors: ["Alex", "Maria", "Saray", "Ruben"],
canciones: ["Vencedor", "Mi abogado Fiel", "Dios va conmigo"],
añoFundacion: 1993,
tipo: "cantante",
descripcion: "cantantes de musica cristiana"
};

// confirmar que esta correcto
// console.dir(artistaFavorito);

// Imprimir la informacion

console.log(`minombre comleto es ${datosPersonales.nombreCompleto}`);
console.log(`Naci en ${datosPersonales.fechaNacimientos}`);
console.log(`El primer pais que me gustaia visitar ${datosPersonales.paisesVisitar[1]}`);
console.log(`informacion de mi artista favorito:
nombre: ${artistaFavorito.añoFundacion}
tipo: ${artistaFavorito.tipo}
añoFundacion: ${artistaFavorito.añoFundacion}
canciones: ${artistaFavorito.canciones[2]}
`
);

console.log(`El dia que naci fue un ${diasSemana[1]}`);