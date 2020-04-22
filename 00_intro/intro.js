const inputColor = document.querySelector("#color");
const btnCambiarColor = document.querySelector("#cambiar_color");

btnCambiarColor.addEventListener("click", () => {
  let color = inputColor.value;

  if (color === "") {
    alert("Debes escribir un valor para el color");
  } else {
    cambiarColorFondo(color);
  }
});

function cambiarColorFondo(color) {
  console.log("Me han llamado");

  document.body.style.backgroundColor = color;
}
