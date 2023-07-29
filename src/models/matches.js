const mongoose = require('mongoose');

const matchesSchema = new mongoose.Schema({
    match_Name:{
        type:String,
        required:true
    },
    match_Type:{
        type:String,
        required:true
    },
    match_Status:{
        type:String,
        required:true
    },
    match_Date:{
        type:Date,
        required:true
    },
    series_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Series'
    }
})

const Matches = new mongoose.model("Matches",matchesSchema);

module.exports = Matches;