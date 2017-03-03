const config = require('config');
const pmongo = require('promised-mongo');

let db = pmongo(config.mongo.db, config.mongo.collections);

module.exports = {db};
