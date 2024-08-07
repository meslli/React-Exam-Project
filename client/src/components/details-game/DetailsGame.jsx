import { useParams } from 'react-router-dom';

import { useGetGame } from '../../hooks/useGames';
import { useGetComments } from '../../hooks/useComments';

import Comment from './comment/Comment'
import CreateComment from './comment/CreateComment'

const DetailsGame = () => {
    const { gameId } = useParams()
    const { comments, updateComments } = useGetComments(gameId)
    const [game] = useGetGame(gameId, updateComments)

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

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <CreateComment gameId={gameId} />
        </section>
    )
}

export default DetailsGame