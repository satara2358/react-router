import {Link} from '../Link'

export default function HomePage(){
  return(
    <>
      <h1>Home</h1>
      <p>Pagina de React Router 0 </p>
      {/* <button onClick={() => navigate('/abaut')}>Sobre nosotros</button> */}
      <Link to='/abaut' >Ir al Abaut</Link>
    </>
  )
}