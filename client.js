const io = require('socket.io-client');

const socket = io('http://localhost:3000', {
  transports: ['websocket'],
});

socket.on('connect', () => {
  console.log('Connected to server');

  socket.on('chat message', (msg) => {
    console.log(msg);
  });

  process.stdin.on('data', (data) => {
    const message = data.toString().trim();
    socket.emit('chat message', `Client: ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
    process.exit(0);
  });
});
