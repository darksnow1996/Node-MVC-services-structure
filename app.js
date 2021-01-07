const express = require('express');
const app = express();
const {PORT} = require('./config');
const http = require('http');
const loaders = require('./loaders')(app);




const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(PORT,null, ()=> {
  console.log("Listening on port " + PORT);
});
