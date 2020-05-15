
function cambiarEsstilo() {
    document.body.style.backgroundColor = "red";

    document.write("soy un mensaje");   
}


function imprimirMensaje() {

    alert ("hola bienvenidos");

    console.log("sooy una prreva mas");

}

function escribirMensaje() {
    document.write("Hola mundo. Esto es js");
}

const divClick = document.querySelector("div");

divClick.addEventListener("click", escribirMensaje);