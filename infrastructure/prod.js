var _ = require('lodash');
var heroin = require('heroin-js');
var configurator = heroin(process.env.HEROKU_API_TOKEN);

var prodConfig = {
  name: 'pawelbooks',
  log_drains: ['syslog://data.logentries.com:13636']
};

var config = _.merge({}, require('./base'), prodConfig);
configurator(config);

