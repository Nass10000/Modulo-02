const Movie = require('../models/Movie');

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


const createMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);
        await newMovie.save();
        res.status(201).json({ message: "Película creada con éxito" });
    } catch (error) {
        if (error.code === 11000) { // Código de error para duplicados en MongoDB
            res.status(400).json({ message: "El título de la película ya existe" });
        } else {
            res.status(500).json({ message: "Error al crear la película", error });
        }
    }
};

const deleteMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMovie = await Movie.findByIdAndDelete(id);
        if (!deletedMovie) {
            return res.status(404).json({ error: "Película no encontrada" });
        }
        res.status(200).json({ message: "Película eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const { id } = req.params;
        const movieData = req.body;
        const updatedMovie = await Movie.findByIdAndUpdate(id, movieData, { new: true });
        if (!updatedMovie) {
            return res.status(404).json({ error: "Película no encontrada" });
        }
        res.status(200).json(updatedMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getMovies, createMovie, deleteMovie, updateMovie };
