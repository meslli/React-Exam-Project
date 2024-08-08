const Comment = ({ comment, author }) => {
    return (
        <li className="comment" >
            <p>{author.username}: {comment}</p>
        </li>
    )
}

export default Comment