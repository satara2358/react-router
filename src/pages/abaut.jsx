import {Link} from '../Link'

export default function Abaut(){
  return(
    <>
      <h1>Abaut</h1>
      <img src="https://avatars.githubusercontent.com/u/25549072?v=4" alt="" />
      <p>Pagina de Abaut</p>
      {/* <button onClick={() => navigate("/")}>Ir a la Home</button> */}
      <Link to='/' >Ir Home</Link>
    </>
  )
}