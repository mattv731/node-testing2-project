
exports.up = function(knex) {
  return knex.schema.createTable("superheros", tbl => {
      tbl.increments("hero_id");
      tbl.string("hero", 100).unique().notNullable();
      tbl.string("alt_identity", 100).unique();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("superheros")
};
