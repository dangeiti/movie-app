const Movie = require('../../models/Movie.model.js');

const admin = async(req, res) => {
  const documents = await Movie.find().exec();
  // console.log(documents)
  res.render('admin/index', { movies: documents });
}

module.exports = admin;