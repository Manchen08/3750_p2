$(document).ready(function(){
    //let messages = [];
    let socket = io.connect('http://localhost:3000');
    let chatForm = $('#chatForm');
    let message = $('#chatInput');
    let chatWindow = $('#chatWindow');
    //how do i get the user?
    let username = $('#username');
    let users = $('#users');
    let error = $('#error');

    chatForm.on('submit', function(e){
        console.log('******     chat  submitted    *******');
         e.preventDefault();  // what does this do exactly? prohibits from writing to a file?
         socket.emit('c2smsg');
         message.val('XXX');
    });

});