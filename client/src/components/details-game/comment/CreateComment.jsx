import { useCreateComment } from "../../../hooks/useComments"

import useForm from "../../../hooks/useForm"

const CreateComment = ({ gameId, updateDetailsComments }) => {
    const createComment = useCreateComment(gameId)
    const { values, updateValues, submitForm } = useForm({ gameId, comment: '' }, async (values) => {
        const comments = await createComment(values)
        updateDetailsComments(comments)
    })

    return (
        <article className="create-comment">
            <label>Add new comment:</label>

            <form className="form" onSubmit={submitForm}>
                <textarea 
                    name="comment" 
                    placeholder="Comment......"
                    value={values.comment}
                    onChange={updateValues}
                ></textarea>

                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    )
}

export default CreateComment