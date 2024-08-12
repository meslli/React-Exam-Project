import { useEffect, useState } from 'react';
import { addGameComment, getGameComments } from '../api/comments-api';

export const useGetComments = (gameId) => {
    const [comments, setComments] = useState([])
    
    useEffect(() => {
        fetchComments()
    }, [gameId])

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

export const useCreateComment = (gameId) => {
    const createComment = async (data) => {
        try {
            await addGameComment(data)
            const res = await getGameComments(gameId)

            return res
        } catch(err) {
            console.error(err.message)
        }
    }
 
    return createComment
}