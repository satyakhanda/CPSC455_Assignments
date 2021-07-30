var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
var bodyParser= require('body-parser')
const mongoUtil = require('./Database/database');




var app = express();
app.use(cors())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'index')));

app.use(bodyParser.json())

let cards = [
  {   artistName: "Pablo Picasso",
      pieceName: "Les Demoiselles d'Avignon",
      pieceLink: "https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104",
      id: 1
  },
  {
      artistName: "Paul Cézanne",
      pieceName: "Bouilloire et fruits",
      pieceLink:"http://prod-upp-image-read.ft.com/0c7266fa-6a3d-11ea-800d-da70cff6e4d3",
      id: 2    
  }
];

const initialCards = [
  {   artistName: "Pablo Picasso",
      pieceName: "Les Demoiselles d'Avignon",
      pieceLink: "https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104",
      id: 1
  },
  {
      artistName: "Paul Cézanne",
      pieceName: "Bouilloire et fruits",
      pieceLink:"http://prod-upp-image-read.ft.com/0c7266fa-6a3d-11ea-800d-da70cff6e4d3",
      id: 2    
  }
];

app.get('/api/tradingcards', (req, res) => {
  var db = mongoUtil.getDb();
  db.collection("devices").find({}).toArray()
      .then((response) => {
          console.log(response);
          res.json(response);
      });
});

app.post('/api/tradingcards', (req, res) => {
  const newCard = {
    artistName: req.body.artistName,
    pieceName: req.body.pieceName,
    pieceLink: req.body.pieceLink,
    id: cards[cards.length - 1].id + 1
  };

  var db = mongoUtil.getDb();
  db.collection('devices').insertOne(newCard, function(err, result) {
    if (err) throw err;
    console.log("Card Added");
  });
});

app.delete('/api/tradingcards', (req, res) => {
  console.log("LINK:",req.body.id) 
  const cardId = req.body.id
  if (cardId === -1) return res.status(404).json({})

  var db = mongoUtil.getDb();
  db.collection('devices').deleteOne({pieceLink: cardId}, function(err, result) {
      if (err) throw err;
      console.log("Card Deleted");
  });
});

app.delete('/api/tradingcards/all', function(req, res) {
  var db = mongoUtil.getDb();
  db.collection('devices').deleteMany({}, function(err, result) {
      if (err) throw err;
      console.log("All Cards Deleted");
  });
});

app.get('/api/tradingcards/initialCards', function(req, res) {
  var db = mongoUtil.getDb();

  const card1 = {   
      artistName: "Pablo Picasso",
      pieceName: "Les Demoiselles d'Avignon",
      pieceLink: "https://render.fineartamerica.com/images/rendered/default/flat/tapestry/images-medium-5/les-demoiselles-d-avignon-pablo-picasso.jpg?&targetx=0&targety=-84&imagewidth=930&imageheight=962&modelwidth=930&modelheight=794&backgroundcolor=E0A693&orientation=1&producttype=tapestry-88-104",
      id: 1
  }
  const card2 = {
      artistName: "Paul Cézanne",
      pieceName: "Bouilloire et fruits",
      pieceLink:"http://prod-upp-image-read.ft.com/0c7266fa-6a3d-11ea-800d-da70cff6e4d3",
      id: 2    
  }

  db.collection('devices').insertOne(card1, function(err, result) {
      if (err) throw err;
      console.log("Initial Card 1 Added");
  });
  db.collection('devices').insertOne(card2, function(err, result) {
      if (err) throw err;
      console.log("Initial Card 2 Added");
  });

  res.json(cards);
});

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoUtil.connectToServer( function( err, client ) {
  if (err) console.log(err);
  console.log("Connected to mongodb")
});


module.exports = app;
