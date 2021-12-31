const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
  name: String,
  accountId: String,
  userId: Number,
  date_created: String,
  email: String,
  phone: String,
  passwordHash: String,
  avatar: String,
});

const Accountschema = new mongoose.Schema({
  title: String,
  accountId: Number,
});

const User = mongoose.model('User', Userschema);
const Account = mongoose.model('Account', Accountschema);

module.exports = { 
  User, 
  Account,
};