// import axios from 'axios'
import { api } from "../axiosSetup"
const resgisterUser = async (name, email, password, phone_number) => {
    await api.post('/signup')
}