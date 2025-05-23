const Movie = require('../models/Movie');


const getAllMovies = async () => {
    try {
        return await Movie.find();// Devuelve todas las películas
    } catch (error) {
        throw new Error(`Error obteniendo las películas: ${error.message}`);
    }
};

const addMovie = async (movieData) => {
    try {
        return await Movie.create(movieData);// Crea una nueva película
    } catch (error) {
        throw new Error(`Error agregando la película: ${error.message}`);
    }
};

module.exports = { getAllMovies, addMovie };
