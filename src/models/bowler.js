const mongoose = require('mongoose');


const bowlerSchema = new mongoose.Schema({
    match_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"match"
    },
    team_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Team"
    },
    player_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"match"
    },
    run:{
        type:Number,
        required:true
    },
    over:{
        type:Number,
        required:true
    },
    wicket:{
        type:Number,
        required:true
    },
    extra:{
        type:String,
        required:true
    }
    


})

const Bowler = new mongoose.model("Bowler",bowlerSchema);

module.exports = Bowler;