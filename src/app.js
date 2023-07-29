const express = require("express");
const seriesRoutes = require('./routers/SeriesRouter');
const matchesRoutes = require('./routers/MatchesRouter');
const teamRoutes = require('./routers/TeamRouter');
const squadRoutes = require('./routers/SquadRouter');
const battingRoutes = require('./routers/BattingRouter');
const bowlingRoutes = require('./routers/BowlingRouter');
require("./db/conn");
const { get } = require("mongoose");



const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(seriesRoutes);
app.use(matchesRoutes);
app.use(teamRoutes);
app.use(squadRoutes);
app.use(battingRoutes);
app.use(bowlingRoutes);


//series info

app.get('/series_info',async(req,res)=>{
    try{

        const suqadData = await Series_info.aggregate([
            {
                $lookup:{
                    from:"series",
                    localField:"series_id",
                    foreignField:"_id",
                    as:"series"
                }
            },
            {
                $lookup:{
                    from:"matches",
                    localField:"match_id",
                    foreignField:"_id",
                    as:"matches"
                }
            },
            {
                $lookup:{
                    from:"squads",
                    localField:"squad_id",
                    foreignField:"_id",
                    as:"squad"
                }
            },
            {
                $lookup:{
                    from:"teams",
                    localField:"team_id",
                    foreignField:"_id",
                    as:"team"
                }
            },
        ]) 
        res.send(suqadData);
    }catch(err){
        res.send(err);
    }
})

app.post('/series_info', async(req,res)=>{

        try{
            const series_info = new Series_info({
                series_id:req.body.series_id,
                match_id:req.body.match_id,
                team_id:req.body.team_id,
                squad_id:req.body.squad_id
            })
const saveSeries_info = series_info.save();
res.send(saveSeries_info);
        }catch(err){
            res.status(400).send(err);
        }
})

//ball by ball
app.post('/ballbyball',async(req,res) => {
    try{
        const ballbyball = new BallByBall({
            match_id:req.body.match_id,
            team_id:req.body.match_id,
            match_id:req.body.match_id,
            match_id:req.body.match_id,
            match_id:req.body.match_id,
            match_id:req.body.match_id,
            match_id:req.body.match_id

        })

    }catch(err){
        res.status(400).send(err)
    }
})
app.listen(port, ()=>{
    console.log(`Server run at this port ${port}`);
})