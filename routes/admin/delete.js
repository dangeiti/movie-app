const Movie = require('../../models/Movie.model.js');

const adminDelete = async (req, res) => {
  
  const idToDelete = req.params.id;
  await Movie.findById(idToDelete).exec();

  //Delete object from database
  await Movie.deleteOne({ _id: idToDelete }).exec();
  res.redirect('/admin');
}

module.exports = adminDelete;