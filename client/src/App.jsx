import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import CatalogueGames from './components/catalogue-games/CatalogueGame'
import DetailsGame from './components/details-game/DetailsGame'
import CreateGame from './components/create-game/CreateGame'
import EditGame from './components/edit-game/EditGame'
import RouteGuard from './components/common/RouteGuard'

function App() {
  return (
      <div id="box">
        <Header />

        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/catalogue-games' element={<CatalogueGames />} />
            <Route path='/details-game/:gameId' element={<DetailsGame />} />
            
            <Route element={<RouteGuard />}>
              <Route path='/create-game' element={<CreateGame />} />
              <Route path='/edit-game/:gameId' element={<EditGame />} />
              <Route path='/logout' element={<Logout />} />
            </Route>
          </Routes>
        </main>
      </div>
  )
}

export default App
