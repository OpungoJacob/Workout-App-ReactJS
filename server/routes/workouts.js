const express = require('express');


const router = express.Router();

//GET all workouts
router.get('/',(req,res)=>{
res.json({mssg: 'GET all workouts'})
})

//GET a single workout
router.get('/:id',(req,res) =>{
res.json({mssg:'Get a single workout'})
})

//POST a new workout
router.post('/', async (req,res)=>{
         
})

//DELETE a new workout
router.delete('/:id',(req,res)=>{
    res.json({mssg:'DELETE a workout'})
})

//UPDATE a new workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'UPDATE a workout'})
})


module.exports = router