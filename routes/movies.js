const express = require('express');
const router = express.Router();
let idCounter = 1;

// Show all movies
router.get('/', (req, res) => {
  res.render('index', { movies: req.app.locals.movies });
});

// Show Add Movie Form
router.get('/add', (req, res) => {
  res.render('add', { error: null });
});

// Handle Movie Submission
router.post('/add', (req, res) => {
  const { name, description, year, genres, rating } = req.body;
  if (!name || !year) {
    return res.render('add', { error: 'Name and Year are required.' });
  }

  const newMovie = {
    id: idCounter++,
    name,
    description,
    year,
    genres,
    rating
  };

  req.app.locals.movies.push(newMovie);
  res.redirect('/');
});

// Show Movie Details
router.get('/movies/:id', (req, res) => {
  const movie = req.app.locals.movies.find(m => m.id == req.params.id);
  if (!movie) return res.status(404).send('Movie not found');
  res.render('details', { movie });
});

// Show Edit Form
router.get('/movies/:id/edit', (req, res) => {
  const movie = req.app.locals.movies.find(m => m.id == req.params.id);
  if (!movie) return res.status(404).send('Movie not found');
  res.render('edit', { movie, error: null });
});

// Handle Edit Submission
router.post('/movies/:id/edit', (req, res) => {
  const movie = req.app.locals.movies.find(m => m.id == req.params.id);
  if (!movie) return res.status(404).send('Movie not found');

  const { name, description, year, genres, rating } = req.body;
  if (!name || !year) {
    return res.render('edit', { movie, error: 'Name and Year are required.' });
  }

  Object.assign(movie, { name, description, year, genres, rating });
  res.redirect('/');
});

// Handle Delete
router.post('/movies/:id/delete', (req, res) => {
  req.app.locals.movies = req.app.locals.movies.filter(m => m.id != req.params.id);
  res.redirect('/');
});

module.exports = router;
