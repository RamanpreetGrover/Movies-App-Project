const express = require("express");
const router = express.Router();
const Movie = require("../models/Movie");

// ─── List All Movies ───────────────────────────────────────────────
router.get("/", async (req, res, next) => {
  try {
    const movies = await Movie.find().sort({ createdAt: -1 });
    res.render("index", { movies });
  } catch (err) {
    next(err);
  }
});

// ─── Show Add Movie Form ───────────────────────────────────────────
router.get("/add", (req, res) => {
  res.render("add", { error: null, movie: {} });
});

// ─── Handle Movie Submission ───────────────────────────────────────
router.post("/add", async (req, res, next) => {
  const { name, description, year, genres, rating } = req.body;
  // ensure genres is an array
  const genresArr = genres
    ? Array.isArray(genres)
      ? genres
      : genres.split(",").map((g) => g.trim())
    : [];

  try {
    await Movie.create({ name, description, year, genres: genresArr, rating });
    res.redirect("/");
  } catch (err) {
    // collect validation messages
    const error =
      Object.values(err.errors || {})
        .map((e) => e.message)
        .join(" ") || err.message;
    res.render("add", { error, movie: req.body });
  }
});

// ─── Show Movie Details ────────────────────────────────────────────
router.get("/movies/:id", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.render("details", { movie });
  } catch (err) {
    next(err);
  }
});

// ─── Show Edit Form ────────────────────────────────────────────────
router.get("/movies/:id/edit", async (req, res, next) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send("Movie not found");
    res.render("edit", { movie, error: null });
  } catch (err) {
    next(err);
  }
});

// ─── Handle Edit Submission ────────────────────────────────────────
router.post("/movies/:id/edit", async (req, res, next) => {
  const { name, description, year, genres, rating } = req.body;
  const genresArr = genres
    ? Array.isArray(genres)
      ? genres
      : genres.split(",").map((g) => g.trim())
    : [];

  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).send("Movie not found");

    movie.set({ name, description, year, genres: genresArr, rating });
    await movie.save();
    res.redirect(`/movies/${movie._id}`);
  } catch (err) {
    const error =
      Object.values(err.errors || {})
        .map((e) => e.message)
        .join(" ") || err.message;
    res.render("edit", { error, movie: { _id: req.params.id, ...req.body } });
  }
});

// ─── Handle Delete ─────────────────────────────────────────────────
router.post("/movies/:id/delete", async (req, res, next) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
});

module.exports = router;
