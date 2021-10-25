const router = require('express').Router();
const path = require('path');
const db = require("../../models");


// todo GET request for last workout at /workouts
router.get("/workouts", (req, res) => {
  db.Workout.find({})
    .populate("exercises")
    .then(dbWorkout => {
      res.json(dbWorkout);
      
      console.log(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


// todo PUT request to add an exercise to /workouts/:_id

// todo POST request to create a new workout at /workouts

// todo GET request for date range of workouts at /workouts/range

module.exports = router;