import { Link, useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import { useGetGame } from '../../hooks/useGames';
import { useGetComments } from '../../hooks/useComments';

import { deleteGame } from '../../api/games-api';

import Comment from './comment/Comment'
import CreateComment from './comment/CreateComment'

import { UserContext } from '../../context/UserContext';
import ConfirmModal from '../modals/ConfirmModal';

const DetailsGame = () => {
    const navigate = useNavigate()
    const [detailsComments, setDetailsComments] = useState([])
    const { isAuthenticated, userId } = useContext(UserContext)
    const { gameId } = useParams()
    const { comments } = useGetComments(gameId)
    const [ game ] = useGetGame(gameId)
    const [removeGame, setRemoveGame] = useState(false)
    const isOwner = game._ownerId === userId

    const updateDetailsComments = (value) => {
        setDetailsComments(value)
    }

    const cancelRemoveState = () => {
      setRemoveGame(false)
    }

    const deleteGameAction = async () => {
        try {
            await deleteGame(gameId)

            navigate('/')
        } catch(err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        setDetailsComments(comments)
    }, [comments])

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} />

                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                <div className="details-comments">
                    <h2>Comments:</h2>

                    {detailsComments.length > 0 
                        ? (
                            <ul>
                                {detailsComments.map(comment => <Comment key={comment._id} {...comment} />)}
                            </ul>
                        )
                        : <p className="no-comment">No comments.</p>
                    }               
                </div>

                {isOwner && (
                    <div className="buttons">
                        <Link to={`/edit-game/${gameId}`} className="button">Edit</Link>
                        <a href="#" onClick={() => setRemoveGame(true)} className="button">Delete</a>
                    </div>
                )}

            </div>

            {removeGame && 
                <ConfirmModal 
                    method='delete' 
                    gameTitle={game.title} 
                    confirmAction={deleteGameAction}
                    cancelAction={cancelRemoveState}
                />
            }

            {(isAuthenticated && !isOwner) && (
                <CreateComment 
                    gameId={gameId} 
                    updateDetailsComments={updateDetailsComments} 
                />
            )}
        </section>
    )
}

export default DetailsGame