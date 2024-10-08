import { del, get, post, put } from "./requester"

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

export const updateGame = (data) => put(`${BASE_URL}/${data._id}`, data)

export const getLatestGames = async () => {
    const params = new URLSearchParams({
        sortBy: "_createdOn desc",
        pageSize: 3
    })

    let paramStr = params.toString()
    let formattedParamStr = paramStr.replace('+', '%20')

    const response = await get(`${BASE_URL}?${formattedParamStr}`)
    const latestGames = Object.values(response)

    return latestGames
}