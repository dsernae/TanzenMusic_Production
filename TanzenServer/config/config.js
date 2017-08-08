var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'proyecto01musica'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dsernae1:dsernae1@ds149201.mlab.com:49201/tanzenserver'
  },

  test: {
    root: rootPath,
    app: {
      name: 'proyecto01musica'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dsernae1:dsernae1@ds149201.mlab.com:49201/tanzenserver'
  },

  production: {
    root: rootPath,
    app: {
      name: 'proyecto01musica'
    },
    port: process.env.PORT || 8080,
    db: 'mongodb://dsernae1:dsernae1@ds149201.mlab.com:49201/tanzenserver'
  }
};

module.exports = config[env];
