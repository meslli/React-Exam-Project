import { useEffect, useState } from 'react'

import { createGame, getAllGames, getOneGame, updateGame } from '../api/games-api'
import { useNavigate } from 'react-router-dom'

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

export const useGetGame = (gameId) => {
    const [game, setGame] = useState({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    })

    useEffect(() => {
        fetchGameDetails()
    }, [])   
    
    const fetchGameDetails = async () => {
        const res = await getOneGame(gameId)

        setGame(res)
    }

    return [game]
}

export const useCreateGame = () => {
    const navigate = useNavigate()

    try {
        const create = async (gameData) => {
            const { _id } = await createGame(gameData)

            navigate(`/details-game/${_id}`)   
        } 
        
        return create
    } catch(err) {
        console.error(err.message)
    }
}

export const useUpdateGame = () => {
    const update = (data) => updateGame(data)

    return update
}