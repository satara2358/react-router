import './App.css'

import HomePage from './pages/home'
import Abaut from './pages/abaut'
import { Router } from './pages/Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './Route'

const routes = [
  {
    path:'/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Router routes={routes} defauldComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/abaut' Component={Abaut}/>
      </Router>
    </main>
  )
}

export default App
