

const axios = require("axios");
require("./rendercards"); 
require("./form");

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("movies-container");
  if (!container) {
    console.info(
      "Este código no se ejecuta en esta página porque no es la principal."
    );
    return;
  }

  const apiUrl = "http://localhost:3000/movies";

 
  axios
    .get(apiUrl)
    .then((response) => {
      console.log("Películas obtenidas del backend:", response.data);
      renderCards(response.data); 
    })
    .catch((error) => {
      console.error("Error al obtener las películas:", error.message);
    });
});
