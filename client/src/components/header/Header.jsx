import { useContext, useReducer} from "react"

import { Link } from "react-router-dom"

import { UserContext } from "../../context/UserContext"

const Header = () => {
    const { isAuthenticated } = useContext(UserContext)

    return (
        <header>
            <h1><Link className="home" to="/">GamesPlay</Link></h1>

            <nav>
                <Link to="/catalogue-games">All games</Link>

                {isAuthenticated 
                    ? (
                        <div id="user">
                            <Link to="/create-game">Create Game</Link>
                            <Link to="/logout">Logout</Link>
                        </div>
                    )
                    : (
                        <div id="guest">
                            <Link to="/login">Login</Link>
                            <Link to="/register">Register</Link>
                        </div>
                    )
                }       
            </nav>
        </header>
    )
}

export default Header