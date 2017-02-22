module.exports = (io) => {

    io.on('connection', socket => {
        console.log('**********  io on connection test****************');
        //do i have to check if logged in? I think you shouldn't get here if not logged in 
        //get the username and add it to the user list in chatroom?



    });

    io.on('c2smsg', socket => {
        console.log(' -----  client   to  server is working   ----  ');
    });


    io.on('disconnect', socket => {
        // TODO notify the chat room the user disconnected
    });
};
