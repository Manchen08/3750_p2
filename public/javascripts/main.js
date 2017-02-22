$(document).ready(function(){
    //let messages = [];
    let socket = io.connect('http://localhost:3000');
    let chatForm = $('#chatForm');
    let message = $('#chatInput');
    let chatWindow = $('#chatWindow');
    //how do i get the user?
    let username = '';
    let users = $('#users');
    let error = $('#error');
    
    socket.emit('getUser');
    socket.on('user', data => {
        name = data.name;
        username = data.username;
        console.log('got name: ' + name);
        console.log('got username: ' + username);
    });

    chatForm.on('submit', function(e){
        console.log('******     chat  submitted: ' + message.val());
         socket.emit('c2smsg', message.val());
         message.val('');
         e.preventDefault();  // what does this do exactly? prohibits from writing to a file?
    });

});
