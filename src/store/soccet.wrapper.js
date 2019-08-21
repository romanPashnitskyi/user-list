import io from 'socket.io-client';

export var socket = null;

export const connectSocket = () => {
    socket = io.connect(`http://localhost:8081?token=${localStorage.getItem('token')}`);
    console.dir(socket);
    socket.on('new user', data => {
        console.dir('DATA', data)
    });
    // socket.on('disconnect', () => {
    //   if(localStorage.getItem('token') !== 'null') {
    //     connectSocket();
    //   }
    // });
};

export const disconnect = () => {
    if (socket) {
        socket.disconnect();
    }
};