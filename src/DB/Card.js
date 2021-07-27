const mongoose = require('mongoose')

const card = new mongoose.Schema({
    artistName: {type:String},
    pieceName: {type:String},
    pieceLink:{type:String},
    id:{type:Number}  
});
 
module.exports = mongoose.model('card', card);
