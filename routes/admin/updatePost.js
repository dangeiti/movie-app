const Movie = require('../../models/Movie.model.js');

const adminUpdate = async (req, res) => {
  try {
    const idToUpdate = req.params.id;

    //create the updateObject
    let updateObject = {
      "description": req.body.description,
      "category": req.body.category,
      "rating": req.body.rating
  }

    //call update on database
    let filter = { _id: idToUpdate };

    //find the document and put in memory
    await Movie.findById(idToUpdate).exec();
    await Movie.updateOne(filter, updateObject).exec();

  } catch (err) {
      console.log("ERR: ", err);
  } finally {
      //redirect user to index
      res.redirect('/admin');
  }
}

module.exports = adminUpdate;