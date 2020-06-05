// Seleccionar los elementos
const imgPerfil = document.querySelector("img.imagen_perfil");
const tituloNombre = document.querySelector("h3.nombre");
const parrafoNOmbreUsuario = document.querySelector("p.nombre_usuario");
const spanSeguidores = document.querySelector("span.seguidores");
const spanSiguiendo = document.querySelector("span.siguiendo");
const parrafoBio = document.querySelector("p.bio");
const btnBuacar = document.querySelector("button#buscar");
const barraBusqueda = document.querySelector("#barraBusqueda");


btnBuacar.addEventListener("click", function () {
  obtenerDatosGitHub();
});

// Pasos para obtener los dartos
// 1. Crear un funcion asincrona
// 2. Ejecutar un peticion y esperar por la respuesta
// 3. Verificar si la respuesta esta bien
// 4. Convetir la respuesta y procesarla

// 1. Crear un funcion asincrona

async function obtenerDatosGitHub() {
  
  let valor = barraBusqueda.value;
  // 2. Ejecutar un peticion y esperar por la respuesta
  let respuesta = await fetch("https://api.github.com/users/"+valor);

  // 3. Verificar si la respuesta esta bien
  if (respuesta.ok) {
    // 4. Convetir la respuesta y procesarla

    let user = await respuesta.json();

    // acatualizar la informacion en la pagina
    // Actualizar la ruta de la imagen

    imgPerfil.src = user.avatar_url;

    tituloNombre.textContent = user.name;
    parrafoNOmbreUsuario.textContent = user.login;

    spanSeguidores.textContent = user.followers;
    spanSiguiendo.textContent = user.following;

    parrafoBio.textContent = user.bio;
  } else {
    console.log("Ocurrio un error");
  }
}

/*
// Actualizar la ruta de la imagen
imgPerfil.src = user.avatar_url;

// actualizar el nombre

tituloNombre.textContent = user.name;

// Actualizar el nombre de usuario

parrafoNOmbreUsuario.textContent = user.login;


// actualizar informacion de seguidores

spanSeguidores.textContent = user.followers;
spanSiguiendo.textContent = user.following;
*/
