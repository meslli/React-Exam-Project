import { useEffect, useState } from 'react'

import { getAllGames } from '../../api/games-api'

import CatalogueGame from './catalogue-game/CatalogueGame'

const CatalogueGames = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        getAllGames()
            .then(res => setGames(Object.values(res)))
    }, [])

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.length > 0 
                ? games.map(game => <CatalogueGame key={game._id} {...game} />)
                : <h3 className="no-articles">No games yet</h3>
            }
        </section>
    )
}

export default CatalogueGames