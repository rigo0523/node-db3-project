const db = require("../database/dbConfig");

module.exports = {
  get,
  getbyID,
};

function get() {
  return db("steps").select("*");
}

function getbyID(id) {
  return db("steps").where("id", id).first();
}
