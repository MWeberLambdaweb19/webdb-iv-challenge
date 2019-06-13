exports.seed = function(knex, Promise) {
  return knex('dish').insert([
    {name: "Tacos"},
    {name: "Pizza"},
    {name: "Sandwiches"},
  ]);
};
