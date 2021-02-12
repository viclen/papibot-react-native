import axios from 'axios';

// @ts-ignore
import {REACT_APP_SERVER} from '@env';

while (!REACT_APP_SERVER) {}

const api = axios.create({
  baseURL: REACT_APP_SERVER,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
