var socket = io();

(function() {
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = '/js/libs/jquery-3.2.1.min.js';
    script.type = 'text/javascript';
    script.onload = function() {
        var $ = window.jQuery;
        $('#message-form').on('submit', function(e){
        e.preventDefault();

    socket.emit('createMessage', {
            from: 'User',
            text: $('[name=message]').val()
    }, function(){

            });
        })
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();


    socket.on('connect', function () {
        console.log('connected to server');
        // console.log('Welcome to the chat app')

    });

    socket.on('newMessage', function (message){
    console.log('newMessage', message);
    var li = $('<li></li>');
        li.text(`${message.from}: ${message.text}`);

        $('#messages').append(li);
    });

    socket.on('disconnect', function ()  {
        console.log('disconnected from server');
    });


