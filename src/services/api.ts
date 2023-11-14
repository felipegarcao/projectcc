import axios from 'axios';

export const apiNotBaseUrl = axios.create()


export const api = axios.create({
  // baseURL: 'https://api-tcc-5jjf.onrender.com'
  baseURL: 'http://localhost:3333/'
})