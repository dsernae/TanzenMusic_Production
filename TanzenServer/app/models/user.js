// Example model

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String
}, {collection: 'User'});
module.exports = mongoose.model('User', userSchema);

