// test.js
const mongoose = require("mongoose");
const Movie = require("./models/Movie");

// connect (same URI you used in app.js)
mongoose
  .connect(process.env.MONGO_URI || "mongodb://localhost:27017/movies-app")
  .then(async () => {
    const movies = await Movie.find();
    console.log("Movies in DB:", movies);
  })
  .catch((err) => console.error(err))
  .finally(() => mongoose.disconnect());
