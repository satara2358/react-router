import { useEffect } from "react"

export default function SearchPage({routerParams}){
  useEffect(() => {
    document.title = `Buscaste ${routerParams.query}` 
  }, [])

  return(
    <h1>Buscaste {routerParams.query}</h1>
  )
}