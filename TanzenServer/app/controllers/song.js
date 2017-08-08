/**
 * Created by USER on 28/07/2017.
 */

var mongoose = require('mongoose'),
  Song = mongoose.model('Song');

module.exports = {
  createSong: function (req, res) {



    var song = new Song({
      title: req.body.title,
      date: req.body.date,
      artist: req.body.artist,
      genre: req.body.genre,
      owner_username: req.body.owner_username,
      visibility: req.body.visibility,
      shared_with: req.body.shared_with
    });

    song.save(function (err) {
      if (err) {
        return res.status(500).send(err.message);
      }
      // send OK
      return res.status(200).send(song);
    })
  },
  deleteSong: function (req, res) {
    Song.findByIdAndRemove(req.body._id, function (err) {
      if (!err) {
        res.status(200).send();
      } else {
        res.status(500).send(err);
      }
    });
  },
  getAllSongs: function(req, res){
    Song.find({visibility: "Publico", date: new RegExp("2017")},function(err, song){
      if(!err) {
        res.status(200).send(song);
      }else{
        res.status(500).send(err);
      }
    });
  },
  searchSongs: function (req,res) {
    Song.find({title:new RegExp(req.body.searchTerm,"i"),visibility:"Publico"},function(err,songs){
      if(!err) {
        return res.status(200).send(songs)
      }else{
        return res.status(500).send(err);
      }
    })
  },
  searchSongsByGenre: function (req,res) {
    Song.find({genre:new RegExp(req.body.searchTerm,"i"), visibility: "Publico"},function(err,songs){
      if(!err) {
        return res.status(200).send(songs)
      }else{
        return res.status(500).send(err);
      }
    })
  },
  songsSharedWith: function (req,res) {
    Song.find({ shared_with : req.body.username},function(err,songs){
      if(!err) {
        return res.status(200).send(songs)
      }else{
        return res.status(500).send(err);
      }
    })
  },
  getMySongs: function(req, res){
    Song.find({owner_username: req.body.username},function(err, songs){
      if(!err) {
        res.status(200).send(songs);
      }else{
        res.status(500).send(err);
      }
    });
  },
  shareSongsWith:function (req, res) {

    Song.findByIdAndUpdate({_id:req.body._id}, {$push: { 'shared_with' :{ username: req.body.username} }},{upsert:true}
      , function (err) {
        if (err) {
          res.send(err).status(500);
        } else {
          res.send("").status(200);
        }
      });
  },
  searchMySongs: function (req,res) {
    Song.find({title:new RegExp(req.body.searchTerm,"i"),owner_username: req.body.username},function(err,songs){
      if(!err) {
        return res.status(200).send(songs)
      }else{
        return res.status(500).send(err);
      }
    })
  },
  updateSong:function (req,res) {
    Song.findByIdAndUpdate(req.body._id,{
      title:req.body.title,
      artist: req.body.artist,
      genre: req.body.genre,
      date: req.body.date,
      visibility: req.body.visibility
    }
    ,function (err) {
        if(!err) {
          return res.status(200).send("actualizada exitosamente");
        }else{
          return res.status(500).send(err);
        }
      })
  }
};
