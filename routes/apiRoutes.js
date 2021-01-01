const Workout = require("../models/workout.js")

module.exports = function(app){ 

    // Called from getLastWorkout on api.js
    app.get("/api/workouts", (req, res) => {
        Workout.find({})
        .then(workout => {
            res.json(workout);
        })
        .catch(err => {
            res.json(err);
        });
    });

    app.post("/api/workouts",function (req,res){    
        Workout.create({})
        .then(data => res.json(data))
        .catch(err => { 
            res.json(err)
        })
    });

    app.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(data =>{  
            res.json(data)
        })
        .catch(err => { 
            res.json(err)
        })
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findByIdAndUpdate(
          params.id,
          { $push: { exercises: body } },
          // "runValidators" will ensure new exercises meet our schema requirements
          { new: true, runValidators: true }
        )
          .then(dbWorkout => {
            res.json(dbWorkout);
          })
          .catch(err => {
            res.json(err);
          });
      });
      

};
