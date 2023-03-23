const mongoose = require("mongoose")

module.exports = (bob)=>{
    mongoose.connect(`mongodb://127.0.0.1/${bob}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log('Established a connection to the database 🏀🏀🏀🏀🏀'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
}