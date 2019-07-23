'use strict';
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/celebandmovies', {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const moviesArr = [
  {
    title: 'Ocean\'s Twelve',
    duration: 120,
    genre: 'Action',
    plot: 'Casino robbery'
  },
  {
    title: 'Avengers',
    duration: 160,
    genre: 'Action',
    plot: 'Superhero\'s movie'
  },
  {
    title: 'Detective Pikachu',
    duration: 170,
    genre: 'Comedy',
    plot: 'Pikachu investigates things'
  }
];
/* const celebritiesArr = [
  {
    name: 'George Clooney',
    occupation: 'Actor',
    catchPhrase: "It's me, baby."
  },
  {
    name: 'Justin Bieber',
    occupation: 'Popstar',
    catchPhrase: "I'm the Beaver"
  },
  {
    name: 'Aretha Franklin',
    occupation: 'Singer',
    catchPhrase: 'AAAAAAAAAH'
  }
]; */

/* Celebrity.create(celebritiesArr).then((data) => {
  console.log(data);
  mongoose.connection.close();
  ;
}).catch((error) => console.error(error)); */

Movie.create(moviesArr).then((data) => {
  console.log(data);
  mongoose.connection.close();
  ;
}).catch((error) => console.error(error));
