const express = require('express');
const router = express.Router();
const Movie = require("../models/Movie.model")


/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', async (req, res) => {
  const getMovies = await Movie.find()
  res.render('movies', {getMovies})
})

router.get('/movie/:id', async (req, res) => {
  const oneMovie = await Movie.findById(req.params.id)
  console.log(oneMovie)
  res.render('movie-details', oneMovie)
})

module.exports = router;
