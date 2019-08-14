import axios from 'axios';

export const addUsers = (user) => axios
  .post(`http://localhost:8081/api/user`, user)
  .then(res => res.data);

