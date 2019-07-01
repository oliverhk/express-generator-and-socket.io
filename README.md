# ExpressJS and Socket.io

This repository combine [ExpressJS](http://expressjs.com/) and [Socket.io](https://socket.io/) to create real-time app.
So just download and begin to code your real-time app ! 

## Getting Started

* See the lastest release and download it !
* Move the the directory app
* Run the command to install dependancies: **npm i**

Then you have **npm run dev** to launch the server using nodemon and **npm run start** to start the server

### How it works ?

Because implementing Socket.io in Express is not an easy thing, you can use this repository which is ready to use!

#### *bin/www* & *app.js*

Unlike Express, the server is no longer created in the www file but directly in *app.js* . It is subsequently imported into www by:
```
var server = require('../app').server;
```

So the server is create in *app.js* and the base of Socket.io jsut after because Socket.io needs the use the http server.
```
var app = express();
// add support for socket.io
var server = require('http').Server(app); // create the http server
var io = require('socket.io')(server); // set up websockets
```

Then, to be able to use the websockets, you have to create a function which is call when there is a new connection.
```
var connection = require('./socketio/connection.js')
io.on('connection', connection.newConnection);
```

#### */socketio/connection.js*

As you can see, there is a socketio folder that contains connection.js. The latter contains the callback function during a new connection to the server.

In this function, you can put your listeners and transmitters there. You can also import them from another file that contains the callback functions of listeners.
```
exports.newConnection = function(client) {
    console.log('Client connected...')
    
    ...

    client.on('disconnect', function(data) {
        console.log('Client disconnected...');
    })
}
```

So every client will have a unique connection to the server using Socket.io !

#### */public/javascripts/socketScript.js*

If you want the client-server connection to be functional, the client must also be able to handle socket.io.

For this, you need 2 client-side scripts!
```
script(src="/socket.io/socket.io.js")
script(src="/javascript/socketScript.js")
```

The first is a librarie, nothing to install!

The second is the one that will allow you to manage emitters and listeners.

First, we create the connection with the server:
```
var socket = io.connect(location.host)
```

Then just listen to the server or send it data!

## Conclusion

**That's it, ready to code, your server and your client communicates with a bi-directional real-time link!**

Have fun !


