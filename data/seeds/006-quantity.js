exports.seed = function(knex, Promise) {
  return knex('quantity').insert([
   {number: 1},
  ]);
};