//Selecciono por id los elementos HTML
const boton = document.querySelector("button#ocultar_texto");
const div = document.querySelector("div#div");
const titulo = document.querySelector("h1#titulo");

//Agrego un evento al boton de doble click con dblclick
boton.addEventListener("dblclick", function() {
    
    div.style.display = "none"; //Oculto el div por medio de la propiedad display
    titulo.style.color = "red"; //Le asigno un color rojo con la propiedad color
    titulo.style.fontStyle = "italic"; // Pongo el h1 en cursiva con la  propiedad fontStyle
    titulo.innerHTML = "Haz hecho doble click"; //Hago el cambio de texto con InnerHTML
});
