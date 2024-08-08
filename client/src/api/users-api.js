import { get, post } from "./requester"

const BASE_URL = "http://localhost:3030/users"

export const loginUser = (data) => post(`${BASE_URL}/login`, data)

export const logoutUser = () => get(`${BASE_URL}/logout`)

export const registerUser = (email, password) =>  post(`${BASE_URL}/register`, {email, password})