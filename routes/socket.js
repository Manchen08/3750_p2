modules.exports = (io) => {

    io.on('connection', socket => {

    });


    io.on('disconnect', socket => {
        // TODO notify the chat room the user disconnected
    });
};