import axios from 'axios';

export const getUsers = () =>
    axios
        .get(`http://localhost:8081/api/users`)
        .then(res => res.data);

export const addUsers = (user) =>
    axios
        .post(`http://localhost:8081/api/user`, user)
        .then(res => res.data);

export const deleteUsers = (user) =>
    axios
        .delete(`http://localhost:8081/api/user/${user._id}`)
        .then(res => res.data);

export const editUsers = (payload) =>
    axios
        .put(`http://localhost:8081/api/user`, payload)
        .then(res => res.data);


