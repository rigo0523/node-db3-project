const db = require("../database/dbConfig");

module.exports = {
  get,
  getbyID,
  postStep,
  updateStep,
  deleteStep,
};

//GET /api/steps
function get() {
  return db("steps").select("*");
}

//GET /api/steps/:id
function getbyID(id) {
  return db("steps").where("id", id).first();
}

//POST /api/steps
function postStep(changes) {
  return db("steps")
    .insert(changes, "id")
    .then((ids) => {
      return db("steps").where({ id: ids }).first();
    });
}

//UPDATE /api/steps/:id
function updateStep(id, changes) {
  return db("steps")
    .update(changes)
    .where({ id })
    .then((ids) => {
      return db("steps").where({ id }).first();
    });
}

//DELETE /api/steps/:id
function deleteStep(id) {
  return db("steps").where({ id }).del();
}
