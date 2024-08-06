import { get } from "./requester"

const BASE_URL = "http://localhost:3030/jsonstore/games"

export const getAllGames = () => get(BASE_URL)
