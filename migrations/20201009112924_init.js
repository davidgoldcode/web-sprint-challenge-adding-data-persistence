exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable();
      tbl.string("description");
      tbl.boolean("completed").defaultTo("false");
    })
    .createTable("tasks", (tbl) => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.boolean("completed").defaultTo("false").notNullable();
      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    })
    .createTable("resources", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique();
      tbl.string("description");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments();
      tbl
        .integer("project_id")
        .unsigned()
        .references("id")
        .inTable("projects")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists()
    .createTable("project_resources", (tbl) => {})
    .createTable("resources", (tbl) => {})
    .createTable("tasks", (tbl) => {})
    .createTable("projects", (tbl) => {});
};
