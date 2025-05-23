const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true, 
        required: true 
    },
    year: Number,
    director: String,
    duration: String,
    genre: [String],
    rate: {
        type: Number,
        required: true,  
        min: 0,          
        max: 10
    },
    poster: String,
});

const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;