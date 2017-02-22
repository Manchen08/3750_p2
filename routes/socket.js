module.exports = (io) => {

    io.on('connection', socket => {

        console.log('**********  io connection t****************');
        var req = socket.request;
        console.log('* req.user.username: ' + req.user);
        //do i have to check if logged in? I think you shouldn't get here if not logged in 
        //get the username and add it to the user list in chatroom?

        socket.on('c2smsg', (data, callback) => {
            console.log(' -----  client   to  server is working   ----  ');
        });

        socket.on('getUser', (data, callback) => {
           console.log('got a getUser');
           socket.emit('username', req.user);
        });

        socket.on('disconnect', socket => {
            // TODO notify the chat room the user disconnected
        });

    });

};
