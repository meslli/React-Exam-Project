const Comment = ({ username, userComment }) => {
    return (
        <li className="comment" >
            <p>{username}: {userComment}</p>
        </li>
    )
}

export default Comment