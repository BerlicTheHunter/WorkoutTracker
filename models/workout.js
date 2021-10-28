//* ----- Required Modules and Files ----- *\\

const mongoose = require("mongoose");

//* ----- Instantiate Schema ------ *\\

const Schema = mongoose.Schema;

//* ----- Workout Model ----- *\\ 

const workoutSchema = new Schema({
  _id:{
    types:Schema.Types.ObjectId
  },
  day: {
    type: Date,
    default: Date.now
  },
  exercises:{ type : Array , "default" : [] }
    
});

//* ----- Set Workout Model in Mongoose ----- *\\

const Workout = mongoose.model("Workout", workoutSchema);

//* ----- Export Workout Module ----- *\\

module.exports = Workout;
