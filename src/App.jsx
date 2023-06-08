import './App.css'
import HomePage from './pages/home'
import { Router } from './pages/Router'
import Page404 from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './Route'
import { Suspense, lazy } from 'react'

const LazyAbaut = lazy(() => import('./pages/abaut'))

const routes = [
  {
    path: '/:lang/abaut',
    Component: LazyAbaut
  },
  {
    path:'/search/:query',
    Component: SearchPage
  }
]

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Router routes={routes} defauldComponent={Page404}>
        <Route path='/' Component={HomePage} />
        <Route path='/abaut' Component={LazyAbaut}/>
      </Router>
      </Suspense>
    </main>
    
  )
}

export default App
