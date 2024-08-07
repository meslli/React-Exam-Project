import CatalogueGame from './catalogue-game/CatalogueGame'

import { useGetAllGames } from '../../hooks/useGames'

const CatalogueGames = () => {
    const [games] = useGetAllGames()
  
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