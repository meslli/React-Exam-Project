import { useEffect, useState } from 'react'
import { getAllGames } from '../../api/games-api'

const CatalogueGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getAllGames()
            .then(res => setGames(Object.values(res.games)))
    }, [])

    return (
        // <!-- Catalogue -->
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0 ? (
                games.map((game, key) => (
                    <div className="allGames" key={key}>
                        <div className="allGames-info">
                            <img src={game.imgUrl} />

                            <h6>{game.category}</h6>
                            <h2>{game.title}</h2>
                            <a href="#" className="details-button">Details</a>
                        </div>
            
                    </div>
                ))
            ) : <h3 className="no-articles">No articles yet</h3>}
        </section>
    )
}

export default CatalogueGames