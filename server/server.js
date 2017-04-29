//require native packages
const path = require('path');
const http = require('http');

//npm loaded packages
const express = require('express');
const socketIO = require('socket.io');

//load local files
const {generateMessage} = require('./utils/message')

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
    
    // socket emit from admin 'welcome to the chat app..'

    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat App'));

    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New User Joined'));

  
socket.on('createMessage', (message) => {

    socket.broadcast.emit('newMessage', {
            from:message.from,
            text:message.text,
            createdAt: new Date().getTime()
        });
        console.log('createMessage', message)


        io.emit('newMessage', generateMessage(message.from,message.text));
        // socket.broadcast.emit('newMessage', {
        //     from:message.from,
        //     text:message.text,
        //     createdAt: new Date().getTime()
        // });
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
})






//set path for port

server.listen(port, () => {
    console.log(`App is running on ${port}`)
});
