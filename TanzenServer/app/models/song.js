
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var genres = {
  values:["Salsa", "Reggaeton", "Rock", "Bachata", "Vallenato", "Hip Hop", "Jazz", "Reggae", "Pop", "Rap"],
  message: 'Please type select genre'
};

var visibilities = {
  values:["Publico", "Privado"],
  message: 'Please select a valid visibility'
};

var songSchema = new Schema({
  title: String,
  artist: String,
  date: String,
  genre: { type:String, enum: genres},
  owner_username: String,
  visibility: { type:String, enum:visibilities},
  shared_with: {type: [String]}

}, {collection: 'Song'});
module.exports = mongoose.model('Song', songSchema);

