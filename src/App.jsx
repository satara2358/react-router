import './App.css'

import HomePage from './pages/home'
import Abaut from './pages/abaut'
import { Router } from './pages/Router'
import Page404 from './pages/404'

const routes = [
  {
    path:'/',
    Component: HomePage
  },
  {
    path: '/abaut',
    Component: Abaut
  },
  {
    path: '/search/:query',
    Component:({routerParams}) => <h1>Buscaste {routerParams.query}</h1>
  }
]

function App() {
  return (
    <main>
      <Router routes={routes} defauldComponent={Page404}/>
    </main>
  )
}

export default App
