const Movie = require('../models/Movie.model.js');

const home = async (req, res) => {
  const documents = await Movie.find().exec();
  // console.log(documents)
  res.render('home', { movies: documents });
}

module.exports = home;