import { del, get, post } from "./requester"

const BASE_URL = "http://localhost:3030/data/games"

export const getAllGames = async () => {
    const response = await get(BASE_URL)
    const games = Object.values(response)

    return games
}

export const getOneGame = (gameId) => get(`${BASE_URL}/${gameId}`)

export const addGame = (data) => post(BASE_URL, data)

export const createGame = (data) => post(BASE_URL, data)

export const deleteGame = (gameId) => del(`${BASE_URL}/${gameId}`)