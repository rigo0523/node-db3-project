exports.up = function (knex) {
  return knex.schema
    .createTable("schemes", (tbl) => {
      tbl.increments();
      tbl.text("scheme_name", 128).unique().notNullable();
    })
    .createTable("steps", (tbl) => {
      tbl.increments("id");
      tbl.integer("step_number").notNullable();
      tbl.text("instructions").notNullable();
      tbl
        .integer("scheme_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("schemes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("steps").dropTableIfExists("schemes");
};
