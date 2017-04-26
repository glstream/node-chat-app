//require stuff
const path = require('path');
const express = require('express');

//set up app variable
var app = express();

//const for port 
const port = process.env.PORT || 3000;
//set exoress routes
const publicPath = path.join(__dirname+'/../public');

app.use(express.static(publicPath));




//set path for port

app.listen(port, () => {
    console.log(`App is running on ${port}`)
});
