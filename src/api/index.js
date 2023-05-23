import axios from 'axios'

export const api = axios.create({
    baseURL: "https://www.sweyn.co.uk/v1/"
})