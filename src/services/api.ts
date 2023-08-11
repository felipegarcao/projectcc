import axios from 'axios';

export const api = axios.create()


export const apiJson = axios.create({
  baseURL: 'http://localhost:3333'
})