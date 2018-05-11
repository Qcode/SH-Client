import io from 'socket.io-client';

const socket = io('http://localhost:8080');

function connectToServer(username) {
  socket.emit('join', { username });
}

export { connectToServer };
