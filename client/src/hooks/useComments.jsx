import { useState } from 'react';
import { getGameComments } from '../api/comments-api';

export const useGetComments = (gameId) => {
    const [comments, setComments] = useState([])
    
    const updateComments = (value) => {
        setComments(value)
    }

    const fetchComments = () => {
        getGameComments(gameId)
            .then(res => setComments(res))
            .catch(err => console.error(err))
    }

    return { comments, updateComments, fetchComments } 
}