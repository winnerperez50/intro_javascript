// Seleccionar elementot
let inputNumero1 = document.querySelector("input#numero1");

let inputNumero2 = document.querySelector("input#numero2");

let btnCalcular = document.querySelector("button#calcular");



// agregando el evento click
btnCalcular.addEventListener("click", function(){
let valor1 = Number(inputNumero1.value);
let valor2 = Number(inputNumero2.value);

alert(`La suma es igual a ${valor1 + valor2}`);


});