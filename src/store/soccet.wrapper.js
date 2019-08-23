import io from 'socket.io-client';
import store from './createStore';
import { AddUsersSuccess, UsersRequest, UserStatusChanged } from './actions/users.actions';

export var socket = null;

export const connectSocket = () => {
    socket = io.connect(`http://localhost:8081?token=${localStorage.getItem('token')}`);
    socket.on('new user', data => {
        store.dispatch(AddUsersSuccess(data.name));
        store.dispatch(UsersRequest(store.getState().users.page, store.getState().users.perPage,));
    });
    socket.on('status change', data => {
        const newData = JSON.parse(data);
        store.dispatch(UserStatusChanged(newData.name, newData.status));
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