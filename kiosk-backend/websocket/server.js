const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: '*' }
});

io.on('connection', (socket) => {
  console.log('Ein Client hat sich verbunden. ID:', socket.id);

  socket.on('articleSelected', (data) => {
    console.log('[Server] articleSelected:', data);
    io.emit('articleSelected', data);
  });

  socket.on('stopProcess', (data) => {
    console.log('[Server] stopProcess:', data);
    io.emit('stopProcess', data);
  });

  socket.on('customerDataSubmitted', (data) => {
    console.log('[Server] customerDataSubmitted:', data);
    io.emit('customerDataSubmitted', data);
  });

  socket.on('requestReloadAll', (data) => {
    console.log('[Server] requestReloadAll:', data);
    io.emit('requestReloadAll', {});
  });

  socket.on('disconnect', () => {
    console.log('Ein Client hat die Verbindung getrennt.');
  });
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Socket-Server läuft unter http://localhost:3000');
});
