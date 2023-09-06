//const { default: mongoose } = require('mongoose');
const  { mongoose } = require('mongoose');

//mongoose.connect("mongodb+srv://defficharlina:uGRHddvHnYjH74GY@revouweek11.vk6ejwz.mongodb.net/?retryWrites=true&w=majority");


//const { MongoClient } = require('mongodb')

const databaseMiddleware = async (req, res, next) => {
  const mongoose = await new mongoose('mongodb+srv://defficharlina:uGRHddvHnYjH74GY@revouweek11.vk6ejwz.mongodb.net/?retryWrites=true&w=majority').connect()
  db = mongoose.db('Student Data')
  
  req.db = db
  
  next()
}

module.exports = databaseMiddleware