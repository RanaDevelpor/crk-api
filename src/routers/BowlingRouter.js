const express = require('express');
const Bowler = require('../models/bowler');

const router = new express.Router();

//get bowlers record

router.get('/bowler',async(req,res)=>{
    try{
        const bowler = await Bowler.find();
        res.send(bowler); 
    }catch(err){
        res.status(404).send(err);
    }
})

//get single bowler record

router.get('/bowler/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        if(!_id){
           res.status(404).send(); 
        }else{
            const bowler = await Bowler.findById(_id);
        res.send(bowler); 
        }
        
    }catch(err){
        res.status(404).send(err);
    }
})

//post bowler 

router.post('/bowler',async(req,res) =>{
    try{
            const bowler = new Bowler({
                match_id:req.body.match_id,
                team_id:req.body.team_id,
                player_id:req.body.player_id,
                run:req.body.run,
                over:req.body.over,
                wicket:req.body.wicket,
                extra:req.body.extra

            });
            const savebowler =await bowler.save();
            res.send(savebowler);
    }catch(err){
        res.status(404).send(err);
    }
})

//update bowler

router.patch('/bowler/:id',async(req,res)=>{
    try{
         const _id = req.params.id;
         if(!_id){
            res.status(404).send();
         }else{
            const updateBowler =await Bowler.findByIdAndUpdate(_id,req.body,{
                new:true
            });
            res.send(updateBowler);
         }
    }catch(err){
        res.status(404).send(err);
    }
})

//delete bowler

router.delete('/bowler/:id',async(req,res)=>{
    try{
         const _id = req.params.id;
         if(!_id){
            res.status(404).send();
         }else{
            const deleteBowler =await Bowler.findByIdAndDelete(_id);
            res.send(deleteBowler);
         }
    }catch(err){
        res.status(404).send(err);
    }
})


module.exports = router;