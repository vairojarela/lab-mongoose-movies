'use strict';

const express = require('express');
const router = express.Router();

const Celebrity = require('../models/Celebrity.js');

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.render('celebrities/index', { allCelebrities });
  } catch (error) {
    next(error);
  }
});

router.get('/new', async (req, res, next) => {
  res.render('celebrities/new');
});

router.post('/', async (req, res, next) => {
  try {
    const newCelebrity = req.body;
    await Celebrity.create(newCelebrity);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});
router.get('/:id/edit', async (req, res, next) => {
  try {
    const { id } = req.params;
    const celebrity = await Celebrity.findById(id);
    res.render('celebrities/edit', celebrity);
  } catch (error) {
    next(error);
  }
});

router.post('/:id/', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, occupation, catchPhrase } = req.body;
    const update = {
      name: name,
      occupation: occupation,
      catchPhrase: catchPhrase
    };
    await Celebrity.findByIdAndUpdate(id, update, { new: true });
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.post('/:id/delete', async (req, res, next) => {
  try {
    const { id } = req.params;
    await Celebrity.findByIdAndRemove(id);
    res.redirect('/celebrities');
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  console.log(id);
  try {
    const celebrityDetails = await Celebrity.findById(id);
    res.render('celebrities/show', celebrityDetails);
    console.log(celebrityDetails);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
