import { get, post } from "./requester"

const BASE_URL = "http://localhost:3030/jsonstore/games"

export const getAllGames = () => get(BASE_URL)

export const getOneGame = (gameId) => get(`${BASE_URL}/${gameId}`)

export const addGame = (data) => post(BASE_URL, data)

