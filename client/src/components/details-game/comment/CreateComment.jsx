import { useState } from "react"

import { addGameComment } from "../../../api/comments-api"

import { useGetComments } from "../../../hooks/useComments"

const CreateComment = ({ gameId }) => {
    const [userComment, setUserComment] = useState("")
    const [username, setUsername] = useState("")
    const { fetchComments } = useGetComments(gameId)
    
    const submitComment = async (e) => {
        e.preventDefault()

        await addGameComment(gameId, { username, userComment })
        
        fetchComments()

        setUsername('')
        setUserComment('')
    }

    return (
        <article className="create-comment">
            <label>Add new comment:</label>

            <form className="form" onSubmit={submitComment}>
                <input 
                    type='text' 
                    name='username' 
                    placeholder='Enter your username...' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <textarea 
                    name="comment" 
                    placeholder="Comment......"
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                ></textarea>

                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    )
}

export default CreateComment