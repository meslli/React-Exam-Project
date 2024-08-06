import { get, post } from "./requester"

const BASE_URL = "http://localhost:3030/jsonstore/games"
const buildUrl = (gameId) => `${BASE_URL}/${gameId}/comments`

export const getGameComments = async (gameId) => {
    const response = await get(buildUrl(gameId))
    const games = Object.values(response)

    return games
}

export const addGameComment = (gameId, data) => post(buildUrl(gameId), data)
