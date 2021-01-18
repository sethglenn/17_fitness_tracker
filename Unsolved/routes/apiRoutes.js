const db = require("../models/workoutSchema");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        db.find().then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
    app.post("/api/workouts", async (req, res) => {
        try{
            const response = await db.Workout.create({type:"workout"})
            res.json(response);
        }
        catch(err){
            console.log("Error creating workout: >>", err)
        }
    });
    app.put("/api/workouts/:id", ({body, params}, res) => {
        const workoutId = params.id;
        let savedExercises = [];

        db.Workout.find({_id: workoutId})
        .then(dbWorkout => {
            savedExercises = dbWorkout[0].exercises;
            res.json(dbWorkout[0].exercises)
            let allExercises = [...savedExercises, body]
            updateWorkout(allExercises)
        })
        .catch(err => {
            res.json(err);
        })
        function updateWorkout(exercises) {
            
        }
    });
}