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
        db.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body }},
            { new: true, runValidators: true }
        )
        .then(data => res.json(data))
        .catch(err => {
            console.log("err: >>", err)
            res.json(err)
        })
    });
}