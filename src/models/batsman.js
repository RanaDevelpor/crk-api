const mongoose = require('mongoose');

const batsmanSchema = new mongoose.Schema({
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
    ballFace:{
        type:Number,
        required:true
    },
    score:{
        type:Number,
        required:true
    },
    batting_average:{
        type:Number,
        required:true
    },
    strike_rate:{
        type:Number,
        required:true
    },
    total_fours:{
        type:Number,
        required:true
    },
    total_sixes:{
        type:Number,
        required:true
    },

})

const Batsman = new mongoose.model('Batsman',batsmanSchema);

module.exports = Batsman;