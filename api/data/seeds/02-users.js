const bcrypt = require('bcryptjs');

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    { 
      username: 'ripped', 
      password: bcrypt.hashSync('1234', 4), 
      role: 'client', 
      firstname: 'Vin', 
      lastname: 'Diesel' 
  },
    { 
      username: 'shredded', 
      password: bcrypt.hashSync('1234', 4), 
      role: 'client', 
      firstname: 'Dwayne', 
      lastname: 'Johnson' 
    },
    { 
      username: 'yoked', 
      password: bcrypt.hashSync('1234', 4), 
      role: 'instructor', 
      firstname: 'Gabriel', 
      lastname: 'Cabrejas'}
  ]);
};
