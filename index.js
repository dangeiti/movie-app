const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movie = require('./Movie.model');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;


const uri = "mongodb+srv://crud:crud1234@cluster0-vqrvg.mongodb.net/movie-api?retryWrites=true&w=majority";
// const uri = "mongodb://localhost:27017/movie-api";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


app.set('view engine', 'pug');
app.use('/',express.static('public'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//End Points
app.get('/create', (req,res) => {
  res.render('create');

})

app.post('/addMovie', (req, res) => {
  
    const movieObj = {
    "_id": new mongoose.Types.ObjectId(),
    "title": req.body.title,
    "description": req.body.description,
    "category": req.body.category,
    "rating": req.body.rating
  }

  let newMovie = new Movie(movieObj);
  newMovie.save()
  res.redirect('/');
});

app.get('/', async (req, res) => {
  const documents = await Movie.find().exec();
  // console.log(documents)
  res.render('index', { movies: documents });
})

app.get('/movie/:id', async (req, res) => {
  const selectedId = req.params.id;
  const movie = await Movie.findById(selectedId).exec();
  // console.log(movie)
  res.render('movie', { selectedMovie: movie });
	});

app.get('/update/:id', async (req, res) => {

  const selectedId = req.params.id;
  const document = await Movie.findById(selectedId).exec();
  // console.log(document)
  res.render('update', { movie: document });
    });

app.post('/updateMovie/:id', async (req, res) => {
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
      res.redirect('/');
  }
});

app.get('/categories', (req, res) => {

  res.render('findByCategory');
})

app.post('/individualCategory', async (req, res) => {

  const selectedCategory = req.body.category;
  const documents = await Movie.find({category: selectedCategory}).exec();
  
  res.render('foundByCategoryChannel',{ sortedMovies: documents });
});

app.get('/rating', (req, res) => {

  res.render('findByRating');
})

app.post('/individualRating', async (req, res) => {

  const selectedRating = req.body.rating;
  const documents = await Movie.find({rating: selectedRating}).exec();
  res.render('foundByRatingChannel',{ sortedMovies: documents });
});

app.get('/delete/:id', async (req, res) => {
  
  const idToDelete = req.params.id;
  await Movie.findById(idToDelete).exec();

  //Delete object from database
  await Movie.deleteOne({ _id: idToDelete }).exec();
  res.redirect('/');
});

app.get('/deleteAll', async (req, res) => {
  
  await Movie.deleteMany({}).exec();
  res.redirect('/');
  });

app.listen(port, () => {
  console.log("App is running on port ", port)
})




