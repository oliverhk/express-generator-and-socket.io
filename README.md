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

#### *socketio*

