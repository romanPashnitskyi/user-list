import axios from 'axios';

export const oauth = (payload) =>
    axios.post(`/login`, payload).then(res => res);

export const isAuthentificated = () => {
    return !!localStorage.getItem('token');
};
