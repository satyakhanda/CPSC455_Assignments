const express = require('express')
var cors = require('cors');

const app = express()
app.use(cors());


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
    res.json(cards);
});

app.use(express.urlencoded({extended: true})); 
app.use(express.json());   
app.post('/api/tradingcards', function(req, res) {
    const newCard = {
        artistName: req.body.artistName,
        pieceName: req.body.pieceName,
        pieceLink: req.body.pieceLink,
        id: cards[cards.length - 1].id + 1
    };
    cards.push(newCard);
    console.log(cards);
    console.log(initialCards);
    res.json(cards)
});

app.delete('/api/tradingcards', function(req, res) {
    const cardId = parseInt(req.body.id);
    if (cardId === -1) return res.status(404).json({})

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cards.splice(i, 1);
      }
    }
    res.json(cards);
})

app.delete('/api/tradingcards/all', function(req, res) {
    cards = [];
    res.json(cards);
})

app.get('/api/tradingcards/initialCards', function(req, res) {
    console.log(initialCards)
    console.log("THEN")
    cards = initialCards;
    console.log(cards)

    res.json(cards);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));