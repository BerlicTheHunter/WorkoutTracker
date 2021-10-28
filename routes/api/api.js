const router = require('express').Router();
const path = require('path');
const db = require("../../models");
const mongoose = require("mongoose");
// const { request } = require('http');

// * GET request for last workout at /workouts
router.get("/workouts",(req, res) => {
  db.Workout.find()
    .then(dbWorkout => {        
      res.json(dbWorkout);      
      }
    )
    .catch(err => {
      res.status(400).json(err);
      }
    );
  }
);


// *PUT request to add an exercise to workouts with id of req.params.id

router.put("/workouts/:id", (req, res) => {
  console.log("put route activated");
    const newExercise = req.body;
  db.Workout.findOneAndUpdate(
    { _id: mongoose.Types.ObjectId(req.params.id) }, 
    { $push: {exercises: newExercise}},
    // {new: true, upsert: true },
    
    (error, data) => {
      if (error) {
        res.json(error);
        res.status(404)
      } else {
        console.log("New Exercise Succesfully Inserted");
        res.status(200);
      }
    }
  );  
});


// todo POST request to create a new workout at /workouts

// todo GET request for date range of workouts at /workouts/range

module.exports = router;