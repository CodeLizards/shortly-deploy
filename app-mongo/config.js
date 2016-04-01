var path = require('path');
var mongoose = require('mongoose');
var connection = mongoose.createConnection('mongodb://localhost/myMongo');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(connection);


//create users schema 

var userSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  // created_at: Date,
  // updated_at: Date,
});

//creat user model
var User = connection.model('User', userSchema);

// //create autoIncramenting id stored in column _id
userSchema.plugin(autoIncrement.plugin, 'User');

//create user model

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 100).unique();
//       user.string('password', 100);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('Created Table', table);
//     });
//   }
// });


