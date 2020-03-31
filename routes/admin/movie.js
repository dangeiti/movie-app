const Movie = require('../../models/Movie.model.js');

const adminMovie = async (req, res) => {
  const selectedId = req.params.id;
  const movie = await Movie.findById(selectedId).exec();
  // console.log(movie)
  res.render('admin/movie', { selectedMovie: movie });
	}

module.exports = adminMovie;