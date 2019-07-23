'use strict';

const express = require('express');
const router = express.Router();

const Movie = require('../models/Movie.js');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    res.render('movies/index', { allMovies });
  } catch (error) {
    next(error);
  }
});

router.get('/new', async (req, res, next) => {
  res.render('movies/new');
});

router.post('/', async (req, res, next) => {
  try {
    const newMovie = req.body;
    await Movie.create(newMovie);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});
router.get('/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.render('movies/edit', movie);
  } catch (error) {
    next(error);
  }
});
router.post('/:id/', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, duration, genre, plot } = req.body;
    const update = {
      title: title,
      duration: duration,
      genre: genre,
      plot: plot
    };
    await Movie.findByIdAndUpdate(id, update, { new: true });
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});
router.post('/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Movie.findByIdAndRemove(id);
    res.redirect('/movies');
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const movieDetails = await Movie.findById(id);
    res.render('movies/show', movieDetails);
    console.log(movieDetails);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
