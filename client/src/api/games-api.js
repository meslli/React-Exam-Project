import { get, post } from "./requester"

const BASE_URL = "http://localhost:3030/jsonstore/games"

export const getAllGames = async () => {
    const response = await get(BASE_URL)
    const games = Object.values(response)

    return games
}

export const getOneGame = (gameId) => get(`${BASE_URL}/${gameId}`)

export const addGame = (data) => post(BASE_URL, data)

