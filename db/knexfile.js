require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'tokyo_craft_beer_bars',
      user:     'matty',
      password: 'fish'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
