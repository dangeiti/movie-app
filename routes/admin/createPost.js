const Movie = require('../../models/Movie.model.js');
const mongoose = require('mongoose');

const adminCreate = async (req, res) => {
  
  const movieObj = {
  "_id": new mongoose.Types.ObjectId(),
  "title": req.body.title,
  "description": req.body.description,
  "category": req.body.category,
  "rating": req.body.rating
}

let newMovie = new Movie(movieObj);
newMovie.save()
res.redirect('/admin');
}

module.exports = adminCreate;