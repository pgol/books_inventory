var _ = require('lodash');
var heroin = require('heroin-js');
var configurator = heroin(process.env.HEROKU_API_TOKEN);

var testConfig = {
  name: 'pawelbooks-test'
};

var config = _.merge({}, require('./base'), testConfig);
configurator(config);
