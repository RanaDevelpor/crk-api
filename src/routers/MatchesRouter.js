const express = require('express');
const Matches = require('../models/matches');

const router = new express.Router();


//get matches
router.get("/matches", async(req,res) =>{
    try{
        const matches = await Matches.find({});
    res.send(matches);
    }catch(err){
        res.status(404).send(err);
    }
    
});

//get single matches
router.get("/matches/:id", async(req,res) =>{
    try{
         const _id = req.params.id;
    const matches = await Matches.findById(_id);
    res.send(matches);
    }catch(err){
        res.status(404).send(err);
    }
   
});

//post matches

router.post('/matches' , async(req,res)=>{
    try{
        const match = new Matches({
            match_Name:req.body.match_Name,
            match_Type:req.body.match_Type,
            match_Status:req.body.match_Status,
            match_Date:req.body.match_Date,
            series_id:req.body.series_id
        })
        const saveMatches =await  match.save();
        res.send(saveMatches);
    }catch(err){
        res.status(404).send(err);
    }
})


//update matches

router.patch('/matches/:id',async(req,res) =>{
    try{
        const _id = req.params.id;
        if(!_id){
            res.status(404).send();
        }else{
            const updateMatches = await Matches.findByIdAndUpdate(_id,req.body,{
                new:true
            });
            res.send(updateMatches);
        }
        
        
    }catch(err){
        res.status(404).send(err);
    }
})

//delete matches
router.delete('/matches/:id',async(req,res) =>{
    try{
        const _id = req.params.id;
        if(!_id){
            res.status(404).send();
        }else{
            const deleteMatches = await Matches.findByIdAndDelete(_id);
            res.send(deleteMatches);
        }
        
        
    }catch(err){
        res.status(404).send(err);
    }
})


module.exports = router;