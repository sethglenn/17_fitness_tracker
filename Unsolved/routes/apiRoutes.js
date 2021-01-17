const Workout = require("../models/workout");

module.exports = function (app) {
    app.get("/api/workouts", () => {
        Workout.find().then(data =>{
            res.json(data)
        })
    })
}