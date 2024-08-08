const Comment = ({ comment }) => {
    return (
        <li className="comment" >
            <p>Username: {comment}</p>
        </li>
    )
}

export default Comment