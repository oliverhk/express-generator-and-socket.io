var socket = io.connect(location.host);

socket.on('client', function(data) {
    console.log(data)
})

socket.on('test', function() {
    console.log('test')
})