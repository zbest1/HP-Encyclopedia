const PORT = process.env.PORT || 3000;
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const methodOverride = require('method-override');
mongodb+srv//heroku_s03zvp4t:learning4me2@cluster-s03zvp4t.p5ssz.mongodb.net/heroku_s03zvp4t?retryWrites=true&w=majority
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/hpencyclopedia'

//Controller
const mainController = require('./controllers/controllers-main.js');

//Setup DB

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to mongo')
  })

//Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.use(methodOverride('_method'));
app.use('/HP_Encyclopedia', mainController);


app.listen(PORT, (req, res) => console.log('listening on PORT 3000!'))