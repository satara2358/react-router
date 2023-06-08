import { BUTTON, EVENTS } from "./const"

export function navigate (href){
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

export function Link ({target, to, ...props}){

  const handleClick = (event) => {
    const isMainEvent = event.buton === BUTTON.primary 
    const isModifiedEvent = event.metakey || event.altkey || event.ctrKey || event.shifKey
    const isManageEvent = target === undefined || target ==='_self'

    if(isMainEvent && isManageEvent && isModifiedEvent){
      navigate(to)
      event.preventDefault()
    }
    
  }
  return <a onClick={handleClick} href={to} target={target} {...props}/>
}