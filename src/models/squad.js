const mongoose = require('mongoose');


const squadSchema = new mongoose.Schema({
    player_Name:{
        type:String,
        required:true
    },
    player_Role:{
        type:String,
        required:true
    },
    player_BattingStyle:{
        type:String,
        required:true
    },
    player_BowlingStyle:{
        type:String,
        required:true
    },
    player_Country:{
        type:String,
        required:true
    },
    player_Image:{
        type:String,
        required:true
    },
    player_Status:{
        type:String,
        required:true
    },
    team_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Team"
    },
    match_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Matches"
    }
})

const Squad = new mongoose.model('Squad',squadSchema);

module.exports = Squad;