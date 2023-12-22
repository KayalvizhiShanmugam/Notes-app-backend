//const mongoose = require("mongoose");
require("dotenv").config();
//const connection = mongoose.connect('mongodb+srv://Kayalvizhi:zEhG94Ca1jgLI7S5@cluster0.fo1f9ik.mongodb.net/items?retryWrites=true&w=majority');
//mongoose.set('strictQuery', false);


const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Kayalvizhi:zEhG94Ca1jgLI7S5@cluster0.fo1f9ik.mongodb.net/items?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.set('strictQuery', true); // Add this line to suppress the warning

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = {
  connection,
};
