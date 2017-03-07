process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//TODO: Belki de her istekte hem dev hem de production ortamını yüklemek en iyi
//yol değildir?
var config = [];

config['development'] = {
  MONGO_URL : 'mongodb://localhost/twitter',
  SECRET_KEY : 'über-secret-key',
  DEBUG : true
}

config['production'] = {
  DEBUG : false
}

module.exports = config[process.env.NODE_ENV];
