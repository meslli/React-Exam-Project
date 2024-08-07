import { useEffect, useState } from 'react'

import { getAllGames, getOneGame } from '../api/games-api'

export const useGetAllGames = () => {
    const [games, setGames] = useState([])

    const fetchAllGame = async () => {
        const res = await getAllGames()

        setGames(res)
    }

    useEffect(() => {
        fetchAllGame()
    }, [])

    return [ games ]
}

export const useGetGame = (gameId, updateComments) => {
    const [game, setGame] = useState([])

    useEffect(() => {
        fetchGameDetails()
    }, [])   
    
    const fetchGameDetails = async () => {
        const res = await getOneGame(gameId)
            
        setGame(res)
        updateComments(Object.values(res.comments))
    }

    return [game]
}