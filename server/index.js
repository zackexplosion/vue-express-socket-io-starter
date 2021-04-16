const express = require('express')

const app = express()
const http = require('http')

const server = http.createServer(app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('a user connected', socket.id)

  setTimeout(() => {
    socket.emit('hello', {
      msg: 'YOLO!',
    })
  }, 2000)
})

const PORT = process.env.PORT || 7777
server.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
})
