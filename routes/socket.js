module.exports = (io) => {
    io.sockets.on('connection', socket => {
        
        // TODO: show all current usernames in users div on chatroom page
        
        const user = { name: socket.request.user.name, username: socket.request.user.username };
        
        //console.log('req.user.name: ' + user.name);
        //console.log('req.user.username: ' + user.username);

        socket.on('getUser', (callback) => {
            //console.log('got a getUser');
            io.sockets.emit('user', user);
        });
        
        // Client to Server message
        socket.on('c2smsg', function(data, callback){
            // TODO: write the message to the database
            var chatObject = {person: user.username, message: data};
            io.sockets.emit('s2cmsg', chatObject);
        });

        // Notify the chat room the user disconnected
        socket.on('disconnect', socket => {
            io.sockets.emit('userLoggedOut', user.username);
        });

    });// end on connection event

};
