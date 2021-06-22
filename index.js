const express = require('express');
const port1 = 5001;
const app = express();

app.use('/', (req,res)=>res.send("Hello World."));
app.listen(port1,()=>console.log("Hello Terminal."));