const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};
function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id: id }).first();
}

function findSteps(id) {
  return db("steps")
    .join("schemes", "steps.scheme_id", "=", "schemes.id")
    .where({ scheme_id: id });
}

function add(newScheme) {
  return db("schemes")
    .insert(newScheme, "id")
    .then((ids) => {
      return findById(ids).first();
    });
  // .then((ids) => {
  //   db("schemes").where({ id: ids });
  // });
}

function update(changes, id) {
  return db("schemes")
    .where({ id: id })
    .update(changes)
    .then((ids) => {
      return findById(id);
    });
}

function remove(id) {
  return db("schemes").where("id", id).del();
}
