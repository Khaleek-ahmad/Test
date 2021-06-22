const express = require('express');
const port1 = 5001;
const app = express();
const mongoose = require('mongoose');

//const secret = require('./config');
app.use('/', (req,res)=>res.send("Hello World."));
app.listen(port1,()=>console.log("Hello Terminal."));


// // connect node to mongodb
// mongoose.connect(secret.database, {useNewUrlParser: true,useUnifiedTopology: true}).then(
//     reaolve=>console.log("Connected."),
//     reject=>console.log('Make sure the database server is running ' + reject));
