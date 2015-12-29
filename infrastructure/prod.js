var _ = require('lodash');
var heroin = require('heroin-js');
var configurator = heroin(process.env.HEROKU_API_TOKEN);

var prodConfig = {
  name: 'pawelbooks'
};

var config = _.merge({}, require('./base'), prodConfig);
configurator(config);
