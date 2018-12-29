
exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (user) => {
        user.increments('id').unique();
        user.string('first_name');
        user.string('last_name');
        user.integer('birth_year');
        user.string('email');
        user.string('username');
        user.string('password');
   });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
