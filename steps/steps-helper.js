const db = require("../database/dbConfig");

module.exports = {
  get,
  getbyID,
};

function get() {
  return db("steps");
}

function getbyID(id) {
  return db("steps").where({ id });
}
