var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  user = require ('../controllers/user'),
  song = require ('../controllers/song'),
  passportConfig = require('../../config/passport');


module.exports=function (app) {
  app.use('/', router);
};

router.post('/createSong', song.createSong);
router.post('/deleteSong', song.deleteSong);
router.get('/getAllSongs', song.getAllSongs);
router.post('/searchSongs', song.searchSongs);
router.post('/searchMySongs', song.searchMySongs);
router.post('/songGenre', song.searchSongsByGenre);
router.post('/sharedWith', song.songsSharedWith);
router.post('/mySongs', song.getMySongs);
router.post('/shareSongs', song.shareSongsWith);
router.post('/updateSong', song.updateSong);

router.post('/updatePassword', user.updatePassword);
router.post('/deleteUser', user.deleteUser);
router.post('/searchUser', user.searchUser);

router.post('/signup', user.postSignup);
router.post('/login', user.postLogin);
router.get('/logout', passportConfig.estaAutenticado, user.logout);
router.get('/userInfo', passportConfig.estaAutenticado, function (req, res) {
  res.json(req.user);
});



