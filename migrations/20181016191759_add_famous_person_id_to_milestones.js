
exports.up = function(knex, Promise) {
  return knex.schema.table('milestones', table => {
    table
      .foreign('famous_person_id')
      .references('id')
      .inTable('famous_people')
      .onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('milestones', table => {
    table.dropForeign('famous_person_id')
  })
};
