exports.seed = function(knex, Promise) {
  return knex('ingredient').insert([
   {ingredient_name: "Tortillas"},
   {ingredient_name: "Gummy Bears"},
   {ingredient_name: "Mayonnaise"},
   {ingredient_name: "Sourdough Bread"},
   {ingredient_name: "Pizza Sauce"},
   {ingredient_name: "Cheese"},
   {ingredient_name: "Pretzel Bread"},
   {ingredient_name: "Crunchy Peanut Butter"},
   {ingredient_name: "Strawberry Jelly"},
  ]);
};


