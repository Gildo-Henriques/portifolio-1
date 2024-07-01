const btn = document.querySelector("#btn");
const perfil = document.querySelector("#perfil");
const visibility1 = document.querySelector("#ivi-1");
const visibility2 = document.querySelector("#ivi-2");
const visibility3 = document.querySelector("#ivi-3");
const btnClose = document.querySelector("#close");
const img = document.querySelector("#img");
const nothingScroll = document.querySelector("#body")

function visibilidade() {
  visibility1.classList.add("block");
  visibility1.classList.remove("hidden-1");
  visibility2.classList.add("block");
  visibility2.classList.remove("hidden-1");
  visibility3.classList.add("flex");
  visibility3.classList.remove("hidden-1");
  btnClose.classList.add("block");
  btnClose.classList.remove("hidden-1");
}
function noScroll(){
    nothingScroll.classList.add("overflow-hidden")
}
function expandir() {
  img.classList.add("img");
  perfil.classList.add("width");
}
function centralizarDivBlack() {
  btn.classList.add("center");
}

function eliminar() {
  img.classList.remove("img");
  perfil.classList.remove("width");
  visibility1.classList.add("hidden-1");
  visibility1.classList.remove("block");
  visibility2.classList.add("hidden-1");
  visibility2.classList.remove("block");
  visibility3.classList.add("hidden-1");
  visibility3.classList.remove("flex");
  btnClose.classList.add("hidden-1");
  btnClose.classList.remove("block");
  btn.classList.remove("center");
  nothingScroll.classList.remove("overflow-hidden")
}

btn.addEventListener("click", () => {
  expandir();
  visibilidade();
  centralizarDivBlack();
  noScroll();
  console.log("Perfil expandido");
});

btnClose.addEventListener("click", () => {
  eliminar();
  console.log("Perfil fechado");
});
