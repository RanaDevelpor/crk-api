const express = require('express');
const Series = require("../models/series");

const router = new express.Router();

//get series
router.get('/series',async(req,res)=>{
    try{
        const series = await Series.find();
        res.send(series);
    }catch(err){
        res.status(400).send(err);
    }
})

//
router.get('/series/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
        const series = await Series.findById(_id,req.body);
        res.send(series);
    }catch(err){
        res.status(404).send(err);
    }
})

//post series
router.post("/series", async(req,res) =>{
    try{
    const series = new Series({
        series_Name:req.body.series_Name,
        series_StartDate:req.body.series_StartDate,
        series_EndDate:req.body.series_EndDate,
        series_Status:req.body.series_Status,
        series_Odi:req.body.series_Odi,
        series_T20:req.body.series_T20,
        series_Test:req.body.series_Test,
        series_Type:req.body.series_Type,
        series_TotalMatch:req.body.series_TotalMatch,
    });

    const serised = await series.save();
    res.status(200).send(serised);
}catch(err){
    res.status(404).send(err);
}
});

//update

router.patch('/series/:id', async(req,res) =>{
    try{
        const _id = req.params.id;
        const updateSeries  = await Series.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        res.status(200).send(updateSeries); 
    }catch(err){
        res.status(404).send(err);
    }
})

//delete series
router.delete('/series/:id', async(req,res) =>{
    try{
    
    const _id = req.params.id;
    const deleteSeries = await Series.findByIdAndDelete(_id);
    if(!deleteSeries){
        res.status(404).send();
    }else{
    res.send(deleteSeries);
    }
    }catch(err){
        res.status(404).send(err);
    }

})


module.exports = router;