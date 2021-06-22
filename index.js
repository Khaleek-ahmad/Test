
const express = require('express');
const port1 = 3331;
const app = express();


const secret = require('./config');
app.get('/', (req,res)=>res.send("Hello World."));
app.listen(port1,()=>console.log("Hello Terminal."));

