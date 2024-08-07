import { post } from "./requester"

const BASE_URL = "http://localhost:3030/users"

export const loginUser = (data) => post(`${BASE_URL}/login`, data)