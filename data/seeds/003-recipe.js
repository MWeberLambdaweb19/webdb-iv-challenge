exports.seed = function(knex, Promise) {
  return knex('recipe').insert([
    {recipe_name: "Whack Mack Tacos", dish_id: 1},
    {recipe_name: "Sourdough Bread Pizza", dish_id: 2},
    {recipe_name: "Double Crunch Peanut-Butter & Jelly", dish_id: 3},
  ]);
};


