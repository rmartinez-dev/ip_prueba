// we use the 'ip' module in npm to request IP address of the originating //client

const ip = require('ip');
const express = require('express');

var app = express();

app.get("/",function(req,res){
    res.end("Your IP address is " + ip.address());
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Server running on port number" + PORT);
});