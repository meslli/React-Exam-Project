import { Link } from "react-router-dom"

const CatalogueGame = ({ _id, imageUrl, category, title }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imageUrl} />

                <h6>{category}</h6>
                <h2>{title}</h2>
                <Link to={`/details-game/${_id}`} className="details-button">
                    Details
                </Link>
            </div>
        </div>
    )
}

export default CatalogueGame