const db = require("../models");

module.exports = function (app) {
    app.get("/api/workouts", (_req, res) => {
        db.find().then(data => {
            res.json(data)
        })
        .catch(err => {
            res.json(err)
        })
    });
    app.post("/api/workouts", (_req, res) => {
        db.create({}).then(data => {
            res.json(data)
        })
        .catch(err =>{
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
    })
}