const axios = require("axios");
$(document).ready(function () {
  $("form").on("submit", function (event) {
    event.preventDefault();

    const hours = parseInt($("#hours").val()) || 0;
    const minutes = parseInt($("#minutes").val()) || 0;
    const year = $("#year").val();
    const rate = $("#rating").val();

    if (
      isNaN(parseFloat(rate)) ||
      parseFloat(rate) < 0 ||
      parseFloat(rate) > 10
    ) {
      alert("Por favor, ingresa una calificación válida entre 0 y 10.");
      return;
    }

    const genres = $("input[type='checkbox']:checked");
    const poster = $("#poster").val();

    const movieData = {
      title: $("#title").val(),
      year: parseInt(year),
      director: $("#director").val(),
      duration: `${hours}h ${minutes}m`,
      genre: genres
        .map(function () {
          return $(this).val();
        })
        .get(),
      rate: parseFloat(rate),
      poster: poster,
    };

    console.log("Datos de la película enviados:", movieData);

    axios
      .post("http://localhost:3000/movies", movieData)
      .then(() => {
        alert("Película añadida con éxito.");
        window.location.href = "./index.html";
      })
      .catch((error) => {
        console.error(
          "Error al agregar película:",
          error.response?.data || error.message
        );
        alert("Error al añadir la película. Revisa los datos.");
      });
  });
});
