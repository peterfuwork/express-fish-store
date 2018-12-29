
exports.up = function(knex, Promise) {
    return knex.schema.createTable('comments', (comment) => {
        comment.increments('id').unique();
        comment.string('cid').unique();
        comment.text('text');
        comment.string('rating');
        comment.string('fid').references('id').inTable('fish');
        comment.integer('uid').references('id').inTable('users');
   });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('comments');
};
