const router = require('express').Router();
const path = require('path');
const db = require("../../models");
const mongoose = require("mongoose");


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
        console.log("new record successfully inserted")
        res.status(200);
      }  
    }
  )  
});


//* POST request to create a new workout at /workouts
router.post("/workouts",(req, res) => {
  db.Workout.create(
    {
    date: Date.now(),
    exercises: []   
    }
  )
    .then(dbNewWorkout => {
      res.json(dbNewWorkout);
    })
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
      
    });
  
});
//* GET request for date range of workouts at /workouts/range
router.get("/workouts/range",(req, res) => {
  db.Workout.find()
    .then(dbWorkout => {        
      if(dbWorkout.length > 7){
        const rangeStart = dbWorkout.length -7
        const lastWeek= dbWorkout.slice(rangeStart);
        console.log(lastWeek.length);
        res.json(lastWeek);       }
      else{
        const lastWeek= dbWorkout;
        res.json(lastWeek); 
      }
    })
    .catch(err => {
      res.status(400).json(err);
      }
    );
  }
);

module.exports = router;