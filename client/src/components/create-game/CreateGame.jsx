import useForm from '../../hooks/useForm'
import { useCreateGame } from '../../hooks/useGames'

const initialValues = {
    title: "",
    category: "",
    maxLevel: "",
    imageUrl: "",
    summary: "",
}

const CreateGame = () => {
    const create = useCreateGame()
    const { values, updateValues, submitForm } = useForm(initialValues, create)

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={submitForm}>
                <div className="container">
    
                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input 
                        type="text" 
                        id="title" 
                        name="title"
                        value={values.title}
                        onChange={updateValues}
                        placeholder="Enter game title..." 
                    />
    
                    <label htmlFor="category">Category:</label>
                    <input 
                        type="text"
                        id="category" 
                        name="category"
                        value={values.category}
                        onChange={updateValues}
                        placeholder="Enter game category..." 
                     />
    
                    <label htmlFor="levels">MaxLevel:</label>
                    <input 
                        type="number" 
                        id="maxLevel" 
                        name="maxLevel"
                        value={values.maxLevel}
                        onChange={updateValues}
                        min="1" 
                        placeholder="1" 
                    />
    
                    <label htmlFor="game-img">Image:</label>
                    <input 
                        type="text" 
                        id="imageUrl" 
                        name="imageUrl"
                        value={values.imageUrl}
                        onChange={updateValues}
                        placeholder="Upload a photo..." 
                    />
    
                    <label htmlFor="summary">Summary:</label>
                    <textarea 
                        name="summary"
                        id="summary"
                        value={values.summary}
                        onChange={updateValues}
                    ></textarea>
                    
                    <input 
                        className="btn submit" 
                        type="submit" 
                        value="Create Game" 
                    />
                </div>
            </form>
        </section>
    )
}

export default CreateGame