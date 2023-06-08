import { useEffect, useState } from "react"
import { EVENTS } from "../const"

 


export function Router ({ routes = [], defauldComponent: DefaulCom=() => <h1>404</h1> }){
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

  const Page = routes.find(({ path }) => {
    if(path === current) return true
   const matcherUrl = match(path, {decode: decodeURIComponent})
   const match = matcherUrl(current)
   if (!match) return false

   routerParams = match.params
   return true
  })?.Component
  
  return Page 
  ? <Page routerParams={routerParams}/> 
  : <DefaulCom routerParams={routerParams}/>
}