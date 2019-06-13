exports.seed = function(knex, Promise) {
  return knex('ingredient_measurement').insert([
   {measurement_name: "package", for_ingredient_id: 1, for_quantity_id: 1},
   {measurement_name: "pound", for_ingredient_id: 2, for_quantity_id: 1},
   {measurement_name: "squeeze-tube", for_ingredient_id: 3, for_quantity_id: 1},
   {measurement_name: "loaf", for_ingredient_id: 4, for_quantity_id: 1},
   {measurement_name: "jar", for_ingredient_id: 5, for_quantity_id: 1},
   {measurement_name: "handful", for_ingredient_id: 6, for_quantity_id: 1},
   {measurement_name: "roll", for_ingredient_id: 7, for_quantity_id: 1},
   {measurement_name: "bucket", for_ingredient_id: 8, for_quantity_id: 1},
   {measurement_name: "pail", for_ingredient_id: 9, for_quantity_id: 1},
  ]);
};

