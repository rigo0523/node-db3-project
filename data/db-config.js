// db-config
const knex = require("knex");
const configFile = require("../knexfile");

module.exports = knex(configFile.development);
