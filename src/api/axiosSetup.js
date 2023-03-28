import axios from 'axios'
const baseURL = 'https://sweyn.co.uk/v1/seller/user'
export const api = axios.create({
    baseURL
})