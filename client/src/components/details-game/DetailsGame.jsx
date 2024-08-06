import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import {  getOneGame } from '../../api/games-api';
import { addGameComment } from '../../api/comments-api';

const DetailsGame = () => {
    const [game, setGame] = useState([])
    const [comments, setComments] = useState([])
    const [userComment, setUserComment] = useState("")
    const [username, setUsername] = useState("")
    const { gameId } = useParams()

    useEffect(() => {
        fetchGameDetails()
    }, [])   
    
    const fetchGameDetails = async () => {
        const res = await getOneGame(gameId)
            
        setGame(res)
        setComments(Object.values(res.comments))
    }

    const submitComment = async (e) => {
        e.preventDefault()

        await addGameComment(gameId, { username, userComment })
        
        fetchGameDetails()

        setUsername('')
        setUserComment('')
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imgUrl} />

                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>

                    {comments.length > 0 
                        ? (
                            <ul>
                                {comments.map(comment => <Comment id={comment._id} {...comment}/>)}
                            </ul>
                        )
                        : <p className="no-comment">No comments.</p>
                    }               
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
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
        </section>
    )
}

export default DetailsGame