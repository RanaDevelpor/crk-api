
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crick",{

}).then(() => {
    console.log("connection seccessful");
}).catch((err) => {
    console.log("connaction Failed!");
})