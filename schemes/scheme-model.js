const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};

// /api/schemes
function find() {
  return db("schemes");
}

// /api/schemes/:id
function findById(id) {
  return db("schemes").where({ id: id }).first();
}

// /api/schemes/1/steps
function findSteps(id) {
  return db("steps")
    .join("schemes", "steps.scheme_id", "=", "schemes.id")
    .where({ scheme_id: id })
    .select(
      "schemes.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    );
}

// /api/schemes
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

// /api/schemes/:id
function update(changes, id) {
  return db("schemes")
    .where({ id: id })
    .update(changes)
    .then((ids) => {
      return findById(id);
    });
}

// api/schemes/:id
function remove(id) {
  return db("schemes").where("id", id).del();
}
