import { useNavigate, useParams } from 'react-router-dom'

import useForm from '../../hooks/useForm'
import { useGetGame, useUpdateGame } from '../../hooks/useGames'

const EditGame = () => {
    const navigate = useNavigate()
    const { gameId } = useParams()
    const [game] = useGetGame(gameId)
    const update = useUpdateGame()
    const { values, updateValues, submitForm } = useForm(game, async (values) => {
        // TO DO add modal for confirm
        
        await update(values)

        navigate(`/details-game/${gameId}`)
    }, true)

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={submitForm}>
                <div className="container">

                    <h1>Edit Game</h1>

                    <label htmlFor="leg-title">Legendary title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title" 
                        value={values.title}
                        onChange={updateValues} 
                    />

                    <label htmlFor="category">Category:</label>
                    <input 
                        type="text" 
                        id="category" 
                        name="category" 
                        value={values.category}
                        onChange={updateValues} 
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input 
                        type="number" 
                        id="maxLevel" 
                        name="maxLevel" 
                        min="1" 
                        value={values.maxLevel}
                        onChange={updateValues}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input 
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={updateValues} 
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea 
                        name="summary" 
                        id="summary"
                        value={values.summary}
                        onChange={updateValues}
                    ></textarea>
                    
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>
    )
}

export default EditGame