
exports.up = function(knex, Promise) {
    return knex.schema.createTable('fish', (singleFish) => {
        singleFish.string('id').unique();
        singleFish.string('name');
        singleFish.decimal('price', 8, 2);
        singleFish.text('desc');
        singleFish.string('type');
        singleFish.string('image');
        singleFish.string('care_level');
        singleFish.string('temperament');
        singleFish.string('diet');
        singleFish.integer('minimum_tank_size');
        singleFish.boolean('reef_safe');
   });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('fish');
};
