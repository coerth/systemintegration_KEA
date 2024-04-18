/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users2').del()
  await knex('users2').insert([
    {id: 1, first_name: 'Arne',last_name: 'Nougatgren'},
    {id: 2, first_name: 'Kurt', last_name: 'Kobenhavn'},
    {id: 3, first_name: 'Bjarne', last_name: 'Beton'}
  ]);
};
