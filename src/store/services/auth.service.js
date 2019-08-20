import axios from 'axios';

export const oauth = (payload) =>
    axios.post(`/login`, payload).then(res => res.data.token);

export const token = code =>
    axios.post(`token`, { code: code }).then(res => res.data);

export const isAuthentificated = () => {
    return !!localStorage.getItem('token');
};
