exports.newConnection = function(client) {
    console.log('Client connected...')
    client.emit('test')

    // listen 'disconnect' event from client and close the listener from this client
    client.on('disconnect', function(data) {
        console.log('Client disconnected...');
    })
}