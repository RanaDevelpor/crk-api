const express = require('express');
const Team = require('../models/team');

const router = new express.Router();

//get all teams
router.get('/team',async(req,res)=>{
    try{
        const team =await Team.find();
        res.send(team);
    }catch(err){
        res.send(err);
    }
})

//get one team
//team
router.get('/team/:id',async(req,res)=>{
    try{
        const _id = req.params.id;

        const team =await Team.findById(_id);
        res.send(team);
    }catch(err){
        res.send(err);
    }
})

//post

router.post('/team' , async(req,res)=>{
    try{
        const team = new Team({
            match_id:req.body. match_id,
            team_Name:req.body.team_Name,
            team_ShortName:req.body.team_ShortName,
            team_Image:req.body.team_Image
        })
        const saveTeam =await team.save();
        res.send(saveTeam);
        
    }catch(err){
        res.send(err);
    }
});

//update
router.patch('/team/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        if(!_id){
            res.status(404).send();
        }else{
    const updateTeam =await Team.findByIdAndUpdate(_id,req.body,{
        new:true
    });
    res.send(updateTeam);
}
    }catch(err){
        res.status(404).send(err);
    }
    
})


//delete team
router.delete('/team/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        if(!_id){
            res.status(404).send();
        }else{
    const deleteTeam =await Team.findByIdAndDelete(_id);
    res.send(deleteTeam);
}
    }catch(err){
        res.status(404).send(err);
    }
    
})

module.exports = router;