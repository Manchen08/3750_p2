module.exports = (io) => {
    //io.on('connection', socket => {  // I added sockets as that is hwo i've seen examples, don't understand any differences
    io.sockets.on('connection', socket => {
        
        // TODO: get the username, show name in users div on chatroom page
        
        // Client to Server message
        socket.on('c2smsg', function(data, callback){
            // TODO: get the username, write the message to the database
            //maybe help here https://www.npmjs.com/package/passport.socketio
            io.sockets.emit('s2cmsg', data);
        });

        // Notify the chat room the user disconnected
        socket.on('disconnect', socket => {
            // TODO: get the username, send it as a second parm
            io.sockets.emit('userLoggedOut');
        });

    });// end on connection event

};
