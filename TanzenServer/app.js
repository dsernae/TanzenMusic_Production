var express = require('express'),
  config = require('./config/config'),
  glob = require('glob'),
  mongoose = require('mongoose'),
  cors = require('cors'),
  session = require('express-session'),
  passport = require('passport'),
  MongoStore = require('connect-mongo')(session),
  path = require('path');


mongoose.connect(config.db);

var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + config.db);
});

var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function (model) {
  require(model);
});
var app = express();
var originsWhitelist = [
  'http://localhost:4200'    //this is my front-end url for development

];

var corsOptions = {
  origin: function(origin, callback){
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials:true
}

//here is the magic
app.use(cors(corsOptions));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials","true");
  next();
})

app.use(session({
  secret: 'es un secreto',
  resave: true,
  saveUnitialized: true,
  store: new MongoStore({
    url: config.db,
    autoReconnect: true
  })
}))

app.use(express.static(path.join(__dirname, '/TanzenMusic/dist')));
app.use(passport.initialize());
app.use(passport.session());

module.exports = require('./config/express')(app, config);

app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'TanzenMusic/dist/index.html'));
});



app.listen(config.port, function () {
  console.log('Express server listening on port ' + config.port);
});
