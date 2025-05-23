const renderCards = (data) => {
    const container = document.getElementById("movies-container");
    if (!container) { 
            console.error("No se encontró el contenedor para renderizar las películas");
            return;
    }

    console.log("Datos recibidos en renderCards:", data);

    container.innerHTML = "";
    data.forEach((movie) => {
            console.log("Procesando película:", movie);

            const card = document.createElement("div");
            card.classList.add("movie-card");

            card.innerHTML = `
                    <img src="${movie.poster || 'https://via.placeholder.com/150'}" alt="${movie.title || 'Sin título'}">
                    <h2>${movie.title || 'Sin título'}</h2>
                    <p><strong>Año:</strong> ${movie.year || 'Desconocido'}</p>
                    <p><strong>Director:</strong> ${movie.director || 'Desconocido'}</p>
                    <p><strong>Duración:</strong> ${movie.duration || 'N/A'}</p>
                    <p><strong>Género:</strong> ${(movie.genre || []).join(", ")}</p>
                    <p><strong>Calificación:</strong> ${movie.rate || 'N/A'}</p>
            `;

            container.appendChild(card);
            console.log("Tarjeta creada y agregada al contenedor:", card.outerHTML);
    });

    console.log("Renderización completada.");
};

window.renderCards = renderCards;
