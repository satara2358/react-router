import { Children, useEffect, useState } from "react"
import { EVENTS } from "../const"
import { match } from "path-to-regexp"
 


export function Router ({ children, routes = [], defauldComponent: DefaulCom=() => <h1>404</h1> }){
  const [current, setCurrentPath] = useState(window.location.pathname)

  useEffect(() =>{
    const onLocationChange = ()=> {
      setCurrentPath(window.location.pathname)
    }
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  },[])

  let routerParams = {}

  // addrouter children 

  const routerFromChildren = Children.map(children, ({ props, type }) => {
    const { name } = type
    const isRoute = name === 'Route'
    return isRoute ? props : null

  })
  
  const routreToUse = routes.concat(routerFromChildren)
  const Page = routreToUse.find(({ path }) => {
    if(path === current) return true

   const matcherUrl = match(path, {decode: decodeURIComponent})
   const matched = matcherUrl(current)
   if (!matched) return false

   routerParams = matched.params
   return true
  })?.Component
  
  return Page 
  ? <Page routerParams={routerParams}/> 
  : <DefaulCom routerParams={routerParams}/>
}