const Movie = require('../models/Movie.model.js');

const individualRating = async (req, res) => {

  const selectedRating = req.body.rating;
  const documents = await Movie.find({rating: selectedRating}).exec();
  res.render('foundByRatingChannel',{ sortedMovies: documents });
}

module.exports = individualRating;