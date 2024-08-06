const CatalogueGame = ({ imgUrl, category, title }) => {
    return (
        <div className="allGames">
            <div className="allGames-info">
                <img src={imgUrl} />

                <h6>{category}</h6>
                <h2>{title}</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>
    )
}

export default CatalogueGame