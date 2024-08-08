import { get, post } from "./requester"

const BASE_URL = "http://localhost:3030/data/comments"

export const getGameComments = (gameId) => {
    const params = new URLSearchParams({
        where: `gameId="${gameId}"`
    })

    return get(`${BASE_URL}?${params.toString()}`)
}

export const addGameComment = (data) => post(BASE_URL, data)
