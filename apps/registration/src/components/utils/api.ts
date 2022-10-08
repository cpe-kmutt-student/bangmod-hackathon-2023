import axios from 'axios'

export const api = axios.create({baseURL:process.env.VITE_BACKEND_URL || 'http://localhost:3000'})
