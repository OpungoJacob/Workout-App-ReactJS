const Workout = require("../models/workoutmodel");

//Get all workouts


//Get a single workout


//Create new workout
const createWorkout = async(req, res) => {
    const {title, load, reps} = req.body

    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error){
        res.status(400).json({error: error.message})
    }
}



//update a workout