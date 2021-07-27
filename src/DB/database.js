const MongoClient = require( 'mongodb' ).MongoClient;
const url = "mongodb+srv://shanda:cpsc455a4@cluster0.zhlav.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

var _db;

module.exports = {

  connectToServer: function( callback ) {
    MongoClient.connect( url,  { 
        useUnifiedTopology: true,
        useNewUrlParser: true 
    }, function( err, client ) {
      _db  = client.db('cardDB');
      return callback( err );
    } );
  },

  getDb: function() {
    return _db;
  }
};
