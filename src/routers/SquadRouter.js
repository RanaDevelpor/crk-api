const express = require('express');
const Squad = require('../models/squad');

const router = new express.Router();

//Squads
router.get('/squad',async(req,res)=>{
    try{
        const squad =await Squad.find();
        res.send(squad);
    }catch(err){
        res.send(err);
    }
})

//get single team squad
router.get('/squad/:key',async(req,res)=>{
    try{
        const team_id = req.params.key;
       //res.send(id);
        if(!team_id){
            res.status(404).send();
        }else{
             const squad =await Squad.find({team_id:team_id});
        res.send(squad);
        }
       
    }catch(err){
        res.status(404).send(err);
    }
})


router.post('/squad' , async(req,res)=>{
    try{
    const squad = new Squad({
        player_Name:req.body.player_Name,
        player_Role:req.body.player_Role,
        player_BattingStyle:req.body.player_BattingStyle,
        player_BowlingStyle:req.body.player_BowlingStyle,
        player_Country:req.body.player_Country,
        player_Image:req.body.player_Image,
        player_Status:req.body.player_Status,
        team_id:req.body.team_id,
        match_id:req.body.match_id,
    }) 
    const saveSquad =await squad.save();
    res.send(saveSquad);
}catch(err){
    res.status(404).send(err);
}
})


//update Suqads

router.patch('/squad/:id',async(req,res)=>{
    try{
    const _id = req.params.id;

    if(!_id){
        res.status(404).send();
    }else{
        const updateSquad =await Squad.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.send(updateSquad);
    }
}catch(err){
    res.status(404).send(err);
}
})

//dalete
router.delete('/squad/:id',async(req,res)=>{
    try{
    const _id = req.params.id;

    if(!_id){
        res.status(404).send();
    }else{
        const updateSquad =await Squad.findByIdAndDelete(_id);
        res.send(updateSquad);
    }
}catch(err){
    res.status(404).send(err);
}
})

module.exports = router;