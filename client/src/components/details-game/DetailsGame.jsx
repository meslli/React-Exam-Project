import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';

import { useGetGame } from '../../hooks/useGames';
import { useGetComments } from '../../hooks/useComments';

import { deleteGame } from '../../api/games-api';

import Comment from './comment/Comment'
import CreateComment from './comment/CreateComment'

import { UserContext } from '../../context/UserContext';

const DetailsGame = () => {
    const navigate = useNavigate()
    const { isAuthenticated, userId } = useContext(UserContext)
    const { gameId } = useParams()
    const { comments } = useGetComments(gameId)
    const [ game ] = useGetGame(gameId)
    const isOwner = game._ownerId === userId

    // TO DO: 
    // Display old comments with new one after submit

    // To do 
    // Add modal with question for delete

    const deleteGameHandler = async () => {
        try {
            await deleteGame(gameId)

            navigate('/')
        } catch(err) {
            console.error(err.message)
        }
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
                                {comments.map(comment => <Comment key={comment._id} {...comment} />)}
                            </ul>
                        )
                        : <p className="no-comment">No comments.</p>
                    }               
                </div>

                {isOwner && (
                    <div className="buttons">
                        <a href="#" className="button">Edit</a>
                        <a href="#" onClick={deleteGameHandler} className="button">Delete</a>
                    </div>
                )}
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            {(isAuthenticated && !isOwner) && <CreateComment gameId={gameId} />}
        </section>
    )
}

export default DetailsGame