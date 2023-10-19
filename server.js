const http = require('http');
const socketIo = require('socket.io');

const server = http.createServer();
const io = socketIo(server);

const PORT = 3000;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('chat message', (msg) => {
    console.log(`Client says: ${msg}`);
    
    io.emit('chat message', `Server: ${msg}`);
  });

  socket.emit('chat message', 'Welcome to the chat!');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
