import { createServer } from 'http'
import { Server } from 'socket.io'

const httpServer = createServer()

const io = new Server(httpServer, {
  cors: {
    origin: ['http://127.0.0.1:5500', 'http://localhost:5500']
  }
})

io.on('connection', (socket) => {
  console.log(`User: ${socket.id} connected`)

  socket.on("message", (data) => {
    console.log(data)
    io.emit("message", `${data}`)
  })
})

httpServer.listen(3000, () => {
  console.log("START SERVER")
})