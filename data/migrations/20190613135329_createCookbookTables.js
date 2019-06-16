exports.up = function(knex, Promise) {
    // All tables are made in the order that they are referenced
    // Schema: dish->recipe->ingredient->recipe_ingredient->ingredient_quantity->ingredient_measurement
    return knex.schema.createTable('dish', tbl => {
        tbl.increments(); // primary key that auto increments
        tbl.string('name', 128).notNullable().unique(); // dish name column that is not nullable and unique
    })
    .createTable('recipe', tbl => {
        tbl.increments();

        tbl.string('recipe_name', 128)
        .notNullable()
        .unique();

        tbl.integer('dish_id')
        .unsigned()
        .references('id')
        .inTable('dish')
        .onDelete('RESTRICT') // keeps from item being deleted
        .onUpdate('CASCADE') // keeps item updated with dish id
    })
    .createTable('ingredient', tbl => {
        tbl.increments();

        tbl.string('ingredient_name')
        .notNullable()
        .unique();
    })
    .createTable('recipe_ingredient', tbl => {
        tbl.increments();

        tbl.integer('recipe_id')
        .unsigned()
        .references('id')
        .inTable('recipe')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.integer('ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredient')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
    .createTable('quantity', tbl =>{
        tbl.increments();

        tbl.integer('number')
        .notNullable()
        .unique();
    })
    .createTable('ingredient_measurement', tbl => {
        tbl.increments();

        tbl.string('measurement_name', 128)
        .notNullable()
        .unique();

        tbl.integer('for_ingredient_id')
        .unsigned()
        .references('id')
        .inTable('ingredient')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');

        tbl.integer('for_quantity_id')
        .unsigned()
        .references('id')
        .inTable('quantity')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
    })
};

exports.down = function(knex, Promise) {
  // All tables are deleted in the reverse order that they are referenced
  return knex.schema
  .dropTableIfExists('ingredient_measurement')
  .dropTableIfExists('quantity')
  .dropTableIfExists('recipe_ingredient')
  .dropTableIfExists('ingredient')
  .dropTableIfExists('recipe')
  .dropTableIfExists('dish');
};
