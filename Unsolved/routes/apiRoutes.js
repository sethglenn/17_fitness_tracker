const Workout = require("../models/workoutSchema");
const db = require("../models/workoutSchema");

module.exports = function (app) {
    app.get("/api/workouts", (_req, res) => {
        Workout.aggregate([
            { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
        ])
            .then((Workout) => {
                res.json(Workout);
            })
            .catch((err) => {
                res.json(err);
            });
    });
    app.post("/api/workouts", (_req, res) => {
        db.create({}).then(data => {
            res.json(data)
        })
            .catch(err => {
                console.log("err: >>", err)
                res.json(err)
            })
    });
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        db.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
};

// app.get("/api/workouts", (_req, res) => {
//     db.find({}).then(data => {
//         res.json(data)
//     })
//     .catch(err => {
//         res.json(err)
//     })
// });