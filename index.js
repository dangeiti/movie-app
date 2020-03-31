const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;

// const uri = "mongodb+srv://crud:crud1234@cluster0-vqrvg.mongodb.net/movie-api?retryWrites=true&w=majority";
const uri = "mongodb://localhost:27017/movie-api";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.set('view engine', 'pug');
app.use('/',express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Modules
const home = require('./routes/home')
const categories = require('./routes/categories')
const individualCategory = require('./routes/individualCategory')
const ratings = require('./routes/ratings')
const individualRating = require('./routes/individualRating')
const adminIndex = require('./routes/admin/index')
const adminCreate = require('./routes/admin/create')
const adminCreatePost = require('./routes/admin/createPost')
const adminMovie = require('./routes/admin/movie')
const adminUpdate = require('./routes/admin/update')
const adminUpdatePost = require('./routes/admin/updatePost')
const adminDelete = require('./routes/admin/delete')
const adminDeleteAll = require('./routes/admin/deleteAll')


app.get('/', home)
app.get('/admin', adminIndex)
app.get('/admin/create', adminCreate)
app.post('/admin/create', adminCreatePost)
app.get('/admin/movie/:id', adminMovie );
app.get('/admin/update/:id', adminUpdate)
app.post('/admin/update/:id', adminUpdatePost)
app.get('/admin/delete/:id', adminDelete)
app.get('/categories', categories)
app.post('/individualCategory', individualCategory );
app.get('/ratings', ratings )
app.post('/individualRating', individualRating );
app.get('/deleteAll', adminDeleteAll);

app.listen(port, () => {
  console.log("App is running on port ", port)
})




