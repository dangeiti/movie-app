const Movie = require('../../models/Movie.model.js');

const adminDeleteAll = async (req, res) => {
  
  await Movie.deleteMany({}).exec();
  res.redirect('/admin');
  };

module.exports = adminDeleteAll;