const p02 = document.getElementById("parrafo02");
const buttonPopup = document.getElementById("buttonPopup");
const buttonHidePopup = document.getElementById("buttonHidePopup");
const popup = document.querySelector(".popup");

function ocultar() {
  popup.classList = "popup";
}

//SOLO SE EJECUTAN AL INVOCARLAS CON ()

buttonHidePopup.addEventListener("click",  () => {
  console.log("Dentro de Mostrar");
});

console.log("Antes de las funciones");

console.log("Despues de las funciones");
