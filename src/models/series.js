const mongoose = require("mongoose");

const seriesSchema = new mongoose.Schema({
    series_Name:{
        type:String,
        required:true
    },
    series_StartDate:{
        type:Date,
        required:true
    },
    series_EndDate:{
        type:Date,
        required:true
    },
    series_Status:{
        type:String,
        required:true
    },
    series_Odi:{
        type:Number,
        required:true
    },
    series_T20:{
        type:Number,
        required:true
    },
    series_Test:{
        type:Number,
        required:true
    },
    series_TotalMatch:{
        type:Number,
        required:true
    },
    series_Type:{
        type:String,
        required:true
    }
})


const Series = new mongoose.model("Series",seriesSchema);

module.exports = Series;