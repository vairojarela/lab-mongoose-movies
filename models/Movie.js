'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  duration: {
    type: Number
  },
  genre: {
    type: String
  },
  plot: {
    type: String
  }
}, {
  timestamps: true
})
;

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
