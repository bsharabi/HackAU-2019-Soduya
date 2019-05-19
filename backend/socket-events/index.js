module.exports = (io, socket) => {
    socket.on('jwt', (jwt) => {
        io.emit('jwt', jwt);
    });
}