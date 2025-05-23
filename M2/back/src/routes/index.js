const express = require('express');
const router = express.Router();
const { getMovies, createMovie, deleteMovie, updateMovie } = require('../controllers/MovieControllers');
const validateMovie = require('../middlewares/ValidateMovie');


router.get('/movies', getMovies);


router.post('/movies', validateMovie, createMovie);


router.delete('/movies/:id', deleteMovie);


router.put('/movies/:id', validateMovie, updateMovie);

module.exports = router;
