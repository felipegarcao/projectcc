import axios from 'axios';

export const apiNotBaseUrl = axios.create()


export const api = axios.create({
  baseURL: 'http://localhost:3333'
})