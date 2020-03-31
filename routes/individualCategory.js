const Movie = require('../models/Movie.model.js');

const individualCategory = async (req, res) => {

  const selectedCategory = req.body.category;
  const documents = await Movie.find({category: selectedCategory}).exec();
  
  res.render('foundByCategoryChannel',{ sortedMovies: documents });
}

module.exports = individualCategory;