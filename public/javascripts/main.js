$(document).ready(function(){
    // let usersOnline = [];
    let socket = io.connect('http://localhost:3000');
    let chatForm = $('#chatForm');
    let message = $('#chatInput');
    let chatWindow = $('#chatWindow');
    let username = '';
    //let users = $('#users');
    let error = $('#error');

    socket.emit('getUser');

    socket.on('user', data => {
        username = data.username;
        //users.append(data.username + '<br>');
    });

    chatForm.on('submit', function(e){
         e.preventDefault();
         socket.emit('c2smsg', message.val());
         message.val('');
    });

    socket.on('s2cmsg', function(data){
        chatWindow.append('<strong>' + data.person + ': </strong>'+ data.message + '<br>');
    });

    socket.on('userLoggedOut', (data) => {
        chatWindow.append('<strong>'+data+'</strong> left the chat room.<br>');
    })

    

});