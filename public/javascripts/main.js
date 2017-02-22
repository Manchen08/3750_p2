$(document).ready(function(){
    //let messages = [];
    let socket = io.connect('http://localhost:3000');
    let chatForm = $('#chatForm');
    let message = $('#chatInput');
    let chatWindow = $('#chatWindow');
    
    let username = $('#username');
    let users = $('#users');
    let error = $('#error');

    chatForm.on('submit', function(e){
         e.preventDefault();
         // TODO: Send a chat object rather than a string
         socket.emit('c2smsg', message.val());
         message.val('');
    });

    socket.on('s2cmsg', function(data){
        // TODO: Get the pieces of a chat object and display them instead of just a string
        chatWindow.append('<strong>I haven\'t figured out how to get the user yet: </strong>'+ data + '<br>');
    });

    socket.on('userLoggedOut', () => {
        // TODO: Get the username and insert it 
        chatWindow.append('Somebody logged out');
    })

});