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

#### bin/www & app.js

Unlike Express, the server is no longer created in the www file but directly in app.js . It is subsequently imported into www by:
```
var server = require('../app').server;
```
So the server is create in app.js

In these files, created with express-generator, is implemented socket.io, so websokets are enable and it is so cool !

I use the site to do this: https://onedesigncompany.com/news/express-generator-and-socket-io
