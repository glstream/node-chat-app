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

        var messageTextBox = $('[name=message]')

    socket.emit('createMessage', {
            from: 'User',
            text: messageTextBox.val()
    }, function(){
        messageTextBox.val('');
            });
        })
        var locationButton = $('#send-location');
        locationButton.on('click', function() {
            if (!navigator.geolocation){
                return alert('Geolocation not supported by your browser')
            }

            locationButton.attr('disabled', 'disabled').text('Sending location...')

            navigator.geolocation.getCurrentPosition(function (position){
                locationButton.removeAttr('disabled').text('Send location');
                socket.emit('createLocationMessage', {
                    latitide: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            }, function (){
                locationButton.removeAttr('disabled').text('Send location');
                alert('unable to fetch location')
            })
        })
    };
    document.getElementsByTagName("head")[0].appendChild(script);
})();


    socket.on('connect', function () {
        console.log('connected to server');
        // console.log('Welcome to the chat app')

    });

    socket.on('newMessage', function (message){
        var formattedTime = moment(message.createdAt).format(`h:mm a`);
        var template = $('#message-template').html();
        var html = Mustache.render(template, {
            text:message.text,
            from: message.from,
            createdAt: formattedTime
        });
        $('#messages').append(html);
    
    // var li = $('<li></li>');
    //     li.text(`${message.from} ${formattedTime}: ${message.text}`);

    //     $('#messages').append(li);
    });
    socket.on('newLocationMessage', function (message){
            var formattedTime = moment(message.createdAt).format(`h:mm a`)
            var template = $('#location-message-template').html();
            var html = Mustache.render(template, {
                text:message.text,
                from: message.from,
                createdAt: formattedTime,
                url:message.url
            });
            $('#messages').append(html);
        
            // var li = $('<li></li>')
            // var a = $('<a target=_blank>My Current Location</a>')
            // li.text(`${message.from} ${formattedTime}: `);
            // a.attr('href', message.url);
            // li.append(a);
            //  $('#messages').append(li);
        });

    socket.on('disconnect', function ()  {
        console.log('disconnected from server');
    });

