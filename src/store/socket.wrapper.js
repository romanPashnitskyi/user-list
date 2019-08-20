import io from 'socket.io-client';
// import { UserStatusChanged } from './actions/users.actions';
// import store from './createStore';
export var socket = null;

export const connectSocket = () => {
  socket = io(`http://localhost:8081/api?token=${localStorage.getItem('token')}`);

  // socket.on('status change', data => {
  //   const newData = JSON.parse(data);
  //   store.dispatch(UserStatusChanged(newData.email, newData.status));
  // });

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
