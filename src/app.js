import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generadorCartas() {
    const card = document.querySelector("#card");

    card.classList.add("flip");

    setTimeout(() => {
      card.classList.remove("flip");

      let palos = ["♦", "♥", "♠", "♣"];

      let valores = [
        "A",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "J",
        "Q",
        "K"
      ];

      let randomElement = array => {
        let numArray = Math.floor(Math.random() * array.length);
        return array[numArray];
      };

      const randomPalos = randomElement(palos);
      const randomValores = randomElement(valores);

      const colorPalo =
        randomPalos === "♥" || randomPalos === "♦" ? "red" : "black";

      document.querySelector("#card").innerHTML = `
      <div class="top-palo ${colorPalo}">${randomPalos}</div>
      <div class="number">${randomValores}</div>
      <div class="bottom-palo ${colorPalo}">${randomPalos}</div>
    `;
    }, 500);
  }

  function applyDimensions() {
    const width = document.getElementById("cardWidth").value;
    const height = document.getElementById("cardHeight").value;
    const card = document.getElementById("card");

    card.style.width = width ? width + "px" : card.style.width;
    card.style.height = height ? height + "px" : card.style.height;
  }

  document
    .getElementById("applyDimensions")
    .addEventListener("click", applyDimensions);

  document
    .getElementById("nuevaCarta")
    .addEventListener("click", generadorCartas);

  generadorCartas();
  setInterval(generadorCartas, 10000);
};
