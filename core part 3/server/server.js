const express = require("express")
// *  require CORS
const cors = require("cors")
const app  = express()
// Global Variables
const PORT = 8000
const DB = "Product_db"

// * Middleware
app.use(cors())
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// -- Database connection
require("./config/mangoose.config")(DB)
// --Routes 
require("./routes/product.route")(app)

app.listen(PORT,()=>{
    console.log(">>> SERVER IS RUNNING ON PORT : "+ PORT +" <<< 🚀🚀🚀");})