const Movie = require('../models/movie');

const handleError = (res, error) => {
    res.ststus(500).json({ error });
};

const getMovies = (req, res) => {
    Movie
        .find()
        .sort({ title: 1 })
        .then((movies) => {
            res
                .status(200)
                .json(movies)
        })
        .catch((err) => handleError(res, err));
};

const getMovie = (req, res) => {
    Movie
        .findById(req.params.id)
        .then((movie) => {
            res
                .status(200)
                .json(movie)
        })
        .catch((err) => handleError(res, err));
};

const deleteMovie = (req, res) => {
    Movie
        .findByIdAndDelete(req.params.id)
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => handleError(res, err));
};

const addMovie = (req, res) => {
    Movie
        .create(req.body)
        .then((result) => {
            res
                .status(201)
                .json(result)
        })
        .catch((err) => handleError(res, err));
};

const updateMovie = (req, res) => {
    Movie
        .findByIdAndUpdate(req.params.id, req.body)
        .then((result) => {
            res
                .status(200)
                .json(result)
        })
        .catch((err) => handleError(res, err));
};

module.exports = {
    getMovies,
    getMovie,
    deleteMovie,
    addMovie,
    updateMovie
};