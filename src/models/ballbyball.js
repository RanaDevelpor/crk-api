const mongoose = require('mongoose');

const ballbyballSchema = new mongoose.Schema({
    match_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"match"
    },
    team_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Team"
    },
    batsman:{
        player_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:"Team"
        },
        run:{
            type:Number,
            required:true
        }
    },
    bowler:{
        player_id:{
            type:mongoose.Schema.Types.ObjectId,
            required:"Team"
        },
        run:{
            type:Number,
            required:true
        },
        extra:{
            type:String,
            required:true
        }
    }
})

const BallByBall = new mongoose.model("BallByBall",ballbyballSchema);

module.exports = BallByBall;