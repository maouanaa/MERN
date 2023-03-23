const mongoose = require("mongoose")

const jokesSchema = new mongoose.Schema({
    punchline:{
        type:String,
        required:[true, "punchline IS REQUIRED"],
        minlength:3
    },
    setup:{
        type:String,
        required:[true, "setup IS REQUIRED"],
        minlength:3

    }


});

const jokes = mongoose.model('jokes', jokesSchema);

module.exports = jokes;