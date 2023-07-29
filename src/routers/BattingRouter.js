const express = require('express');
const Batsman = require('../models/batsman');

const router = new express.Router();

//get batsman data
router.get('/batsman',async(req,res)=>{
    try{
    const batsman =await Batsman.find();
    res.send(batsman);
    }catch(err){
        res.status(404).send(err);
    }
})

//single batsman data 
router.get('/batsman/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
       if(!_id){
        res.status(404).send();
       }else{
        const batsman = await Batsman.findById(_id,req.body);
        res.send(batsman);
       }
        
    }catch(err){
        res.status(404).send(err);
    }
})

//post batsman info

router.post('/batsman',async(req,res)=>{
    try{
        const batsman = new Batsman({
            match_id:req.body.match_id,
            team_id:req.body.team_id,
            player_id:req.body.player_id,
            ballFace:req.body.ballFace,
            score:req.body.score,
            batting_average:req.body.batting_average,
            strike_rate:req.body.strike_rate,
            total_fours:req.body.total_fours,
            total_sixes:req.body.total_sixes
        })
        const saveBatsman =await batsman.save();
        res.send(saveBatsman);


    }catch(err){
        res.status(404).send(err);
    }
})


//update batsman

router.patch('/batsman/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const updateBatsman =await Batsman.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateBatsman);
    }catch(err){
        res.status(404).send(err);
    }
    
})

//delete batsman
router.delete('/batsman/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const deleteBatsman =await Batsman.findByIdAndDelete(_id);
        res.send(deleteBatsman);
    }catch(err){
        res.status(404).send(err);
    }
    
})

module.exports = router;