const knex = require("knex");
const knexFile = require("../knexfile");

//env for production, otherwise if no env, go to development
const enviroment = process.env.NODE_ENV || "development";
// we must select the development object from our knexfile
// export for use in codebase, mainly the db helper functions
module.exports = knex(knexFile[enviroment]);
