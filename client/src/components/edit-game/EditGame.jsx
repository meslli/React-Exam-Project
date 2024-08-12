import { useNavigate, useParams } from 'react-router-dom'

import useForm from '../../hooks/useForm'
import { useGetGame, useUpdateGame } from '../../hooks/useGames'
import { useState } from 'react'
import ConfirmModal from '../modals/ConfirmModal'

const EditGame = () => {
    const [openModal, setOpenModal] = useState(false)
    const navigate = useNavigate()
    const { gameId } = useParams()
    const [game] = useGetGame(gameId)
    const update = useUpdateGame()
    const { values, updateValues, submitForm } = useForm(game, async (values) => {
        await update(values)
        
        navigate(`/details-game/${gameId}`)
    }, true)

    const cancelEdit = () => {
        navigate(`/details-game/${gameId}`)
        setOpenModal(false)
    }
  
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
                   
                    <input 
                        type='button' 
                        className="btn submit" 
                        value="Edit"
                        onClick={() => setOpenModal(true)} 
                    />    
                </div>

                {openModal && (
                    <ConfirmModal 
                        method='edit'
                        cancelAction={cancelEdit} 
                        gameTitle={values.title}
                    />
                )}
            </form>
        </section>
    )
}

export default EditGame