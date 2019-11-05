const express = require('express')
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');

//Controller
const mainController = require('./controllers/controllers-main.js');

//Setup DB
mongoose.connect('mongodb://localhost:27017/basiccrud', {
  useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
  })

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use('/HP_Encyclopedia', mainController);


app.listen(3000, (req, res) => console.log('listening on PORT 3000!'))