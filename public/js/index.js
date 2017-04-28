   var socket = io();
    
    socket.on('connect', function () {
        console.log('connected to server');
        // console.log('Welcome to the chat app')

    });

    socket.on('newMessage', function (message){
    console.log('newMessage', message);
    });

    socket.on('disconnect', function ()  {
        console.log('disconnected from server');
    });
