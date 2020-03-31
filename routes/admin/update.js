const Movie = require('../../models/Movie.model.js');

const adminUpdate = async (req, res) => {

  const selectedId = req.params.id;
  const document = await Movie.findById(selectedId).exec();
  // console.log(document)
  res.render('admin/update', { movie: document });
    }

module.exports = adminUpdate;