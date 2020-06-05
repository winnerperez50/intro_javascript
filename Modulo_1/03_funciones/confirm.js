let usuario = {};

usuario.nombre = prompt("Como te llamas?");
usuario.email = prompt("Dime tu correo");
usuario.tieneTikTok = confirm("Tiene TikTok? (aceptar es = si / cancelas = no)");

console.log(usuario);


let confirmarCerraVentana = confirm("Desea salir de esta pagina");

console.log(confirmarCerraVentana);

if (confirmarCerraVentana) {
    window.close();
}
