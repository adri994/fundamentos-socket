
const socketController = (socket) => {
  //id unico al entrar
  // console.log('cliente conectado', socket.id)

  // ciando se desconecta
  socket.on('disconnect', () => {
    console.log('cliente desconectado')
  })

  // Para recibir la informacion tenemos tenemos que poner el mismo nombre que el evento que pusimos en el front y el primer parametro es el payload es decir la informacion que se encvia
  // esperar algo pero solo para esa persona los callbakc
  socket.on('send-message', (payload, callback) => {

    const api = 'asasasas8888888'
    callback({ api, message: payload.message })

    // para Enviar la informacion a todos los que esten conectado tenemos que usar la io
    // utilizar el brocast
    socket.broadcast.emit('send-message',payload)
  })

}

module.exports = socketController