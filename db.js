const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://aayu:ayushigupta@cluster0.6om2o.mongodb.net/mern-pizza'

mongoose.connect(mongoURL)

var db = mongoose.connection

db.on('connected',()=>{
    console.log(`Mongo DB Connection Successful`);

})


db.on('error' , ()=>{
    console.log(`Mongo DB Connection failed`);
})

module.exports = mongoose