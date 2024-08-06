import { get, post } from "./requester"

const BASE_URL = "http://localhost:3030/jsonstore/games"

export const getAllGames = () => get(BASE_URL)

export const addGame = (data) => post(BASE_URL, data)

