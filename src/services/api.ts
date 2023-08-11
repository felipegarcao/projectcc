import axios from 'axios';

export const api = axios.create()


export const apiJson = axios.create({
  baseURL: 'https://localhost:3333'
})