import { useEffect, useState } from 'react';
import { getGameComments } from '../api/comments-api';

export const useGetComments = (gameId) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments()
    }, [])

    const updateComments = (value) => {
        setComments(value)
    }

    const fetchComments = () => {
        getGameComments(gameId)
            .then(res => setComments(res))
    }

    return { comments, updateComments, fetchComments } 
}