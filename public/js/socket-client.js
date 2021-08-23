const online = document.getElementById('on')
const offline = document.getElementById('off')

const txtMessage = document.querySelector('#txtMessage')
const btnSend = document.querySelector('#btnSend')

const socket = io()

// ON: nos perimites escuchar un evento
// Emit : emitir un evento

socket.on('connect',()=>{
  console.log('conectado')

  online.style.display = 'block'
  offline.style.display = 'none'
})
socket.on('disconnect',()=>{
  console.log('desconectado')
  online.style.display = 'none'
  offline.style.display = 'block'
})

socket.on('send-message',(payload)=>{
  console.log(payload)
})

btnSend.addEventListener('click',()=>{
  const payload ={
    message: txtMessage.value,
    id: 123456,
    date: new Date().getTime()
  }

  // enviar informacion al back
  // el tercer parametro es para enviar informacion al back y esperar algo pero solo para esa persona
  socket.emit('send-message', payload, (id)=>{
    console.log('desde el servidor', id)
  })
})







