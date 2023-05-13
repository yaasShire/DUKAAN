import axios from 'axios'

export const api = axios.create({
    baseURL: "https://sweyn.co.uk/v1/"
})