

// const http = require('http');

// const hostname = '0.0.0.0';
// const port = 3331;

// //const MY_MESSAGE = process.env.MY_MESSAGE

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end("Hello Qovery");
// });



// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
/////////////////////////////////////////////////

const express = require('express');
const port1 = 3333;
const app = express();


const secret = require('./config');
app.get('/', (req,res)=>res.send("Hello World."));
app.listen(port1,()=>console.log("Hello Terminal."));


// // connect node to mongodb
// mongoose.connect(secret.database, {useNewUrlParser: true,useUnifiedTopology: true}).then(
//     reaolve=>console.log("Connected."),
//     reject=>console.log('Make sure the database server is running ' + reject));
