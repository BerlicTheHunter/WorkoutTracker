const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exercisesSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: Number,
  weight: Number,
  reps: Number,
  sets: Number,
  distance: Number,
});

const Exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = Exercises;