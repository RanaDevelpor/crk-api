const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    match_id:{
        type:mongoose.Schema.Types.ObjectId,
        required:"Matches"
    },
    team_Name:{
        type:String,
        required:true
    },
    team_ShortName:{
        type:String,
        required:true
    },
    team_Image:{
        type:String,
        required:true
    }
}) 

const Team = new mongoose.model('Team',teamSchema);

module.exports = Team;