//require native packages
const path = require('path');
const http = require('http');

//npm loaded packages
const express = require('express');
const socketIO = require('socket.io');

//set up app, server and io vars
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

//const for port 
const port = process.env.PORT || 3000;

//set express routes
const publicPath = path.join(__dirname+'/../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');
    
    socket.on('createMessage', (message) => {
        console.log('createMessage', message)

        io.emit('newMessage', {
            from:message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })

    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})






//set path for port

server.listen(port, () => {
    console.log(`App is running on ${port}`)
});
