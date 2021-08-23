require('dotenv').config()
const express = require('express');
const morgan = require('morgan')
const cors = require('cors')

class Server {

  constructor(){

    this.app = express();
    this.port = process.env.PORT
    this.server = require('http').createServer(this.app);
    this.io = require('socket.io')(this.server)

    this.middleware()
    this.router()
    this.socket()
  }

  middleware(){
    this.app.use( morgan('dev') )
    this.app.use( cors() )
    this.app.use( express.static('public') )
  }

  router(){

  }

  socket(){
    // Sevidor socket
    this.io.on("connection", require('../socket/controllers'))
  }

  listen(){
    this.server.listen(this.port,()=>{
      console.log('Se esta ejecutando en el puerto '+ this.port)
    })
  }
}

module.exports = Server;