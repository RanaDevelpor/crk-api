const mongoose = require('mongoose');


const series_infoSchema= new  mongoose.Schema({
    series_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Series"
    },
    match_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Matches"
    },
    team_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Team"
    },
    squad_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Squad"
    }

})


const Series_info = new mongoose.model("Series_info",series_infoSchema);

module.exports = Series_info;