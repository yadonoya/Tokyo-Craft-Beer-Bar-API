/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .alterTable('Bars', (table) => {
        table.string('station', 64).notNullable();
        table.boolean('smoking_allowed');
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema
    .alterTable('Bars', function (table) {
        table.dropColumn('station');
        table.dropColumn('smoking_allowed');
    })
};
