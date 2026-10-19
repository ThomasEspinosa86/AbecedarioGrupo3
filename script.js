
const contador = document.querySelector("#contador");
const cards = document.querySelectorAll(".card");
const botones = document.querySelectorAll(".botones button:not(#btn-reiniciar)");
const btnReiniciar = document.querySelector("#btn-reiniciar");

let vistas = 0;

function voltear(card) {

  card.classList.toggle("volteada");

  if (card.classList.contains("volteada")) {

    if (!card.classList.contains("vista")) {
      card.classList.add("vista");
      vistas++;
      contador.textContent = vistas;
    }
  }
   else {
    if (card.classList.contains("vista")) {

      card.classList.remove("vista");
      vistas--;
      contador.textContent = vistas;
    }
  }
}

function filtrar(tipo) {

  for (const card of cards) {

    if (tipo === "todas" || card.dataset.tipo === tipo) {
      card.classList.remove("oculta");
    } else {
      card.classList.add("oculta");
    }
  }
}

function reiniciar() {

  vistas = 0;
  contador.textContent = vistas;

  for (const card of cards) {
    card.classList.remove("volteada");
    card.classList.remove("vista");
  }
}


for (const card of cards) {
  card.addEventListener("click", () => voltear(card));
}

for (const boton of botones) {
  boton.addEventListener("click", () => filtrar(boton.dataset.filtro));
}

btnReiniciar.addEventListener("click", reiniciar);