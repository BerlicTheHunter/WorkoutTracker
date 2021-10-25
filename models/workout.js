//* ----- Required Modules and Files ----- *\\

const mongoose = require("mongoose");

//* ----- Instantiate Schema ------ *\\

const Schema = mongoose.Schema;

//* ----- Workout Model ----- *\\ 

const workoutSchema = new Schema({
  _id: mongoose.Schema.Type.ObjectID,
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
      // This line links to exercise collection
      type: Schema.Types.ObjectId, 
      ref: "Exercises"
    }]   
});

//* ----- Set Workout Model in Mongoose ----- *\\

const Workout = mongoose.model("Workout", workoutSchema);

//* ----- Export Workout Module ----- *\\

module.exports = Workout;
