const Workout = require("../models/workout");

module.exports = function (app) {
    app.get("/api/workouts", () => {
        Workout.find().then(data =>{
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
    app.post("/api/workouts", () => {
        Workout.create({}).then(data => {
            res.json(data)
        })
        .catch(err =>{
            console.log("err", err)
            res.json(err)
        })
    });
    
}