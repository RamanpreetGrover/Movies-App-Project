const express = require('express');
const path = require('path');
const movieRoutes = require('./routes/movies');

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Global in-memory "database"
app.locals.movies = [];

app.use('/', movieRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
