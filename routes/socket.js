module.exports = (io) => {

    io.on('connection', socket => {
        console.log('**********  io on connection test****************');

        const user = { name: socket.request.user.name, username: socket.request.user.username };
        console.log('req.user.name: ' + user.name);
        console.log('req.user.username: ' + user.username);

        socket.on('c2smsg', (data, callback) => {
            console.log(' -----  client   to  server is working   ----  ');
        });

        socket.on('getUser', (data, callback) => {
            console.log('got a getUser');
            socket.emit('user', user);
        });


    });

    io.on('disconnect', socket => {
        // TODO notify the chat room the user disconnected
    });

};