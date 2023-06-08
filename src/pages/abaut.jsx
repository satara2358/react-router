import {Link} from '../Link'

const i18n = {
  es:{
    title: 'sobre nosotros',
    button: 'Ir a Home',
    descripcion: 'ejemplos de react router'
  },
  en:{
    title: 'About us',
    button: 'Go to Home',
    descripcion: 'texto en ingles'
  }
}

const useI18n = (lang) => {
  return i18n[lang] || i18n.en
}

export default function Abaut({routerParams}){
  const i18n = useI18n(routerParams.lang ?? 'es')
  return(
    <>
      <h1>{i18n.title}</h1>
      <img src="https://avatars.githubusercontent.com/u/25549072?v=4" alt="" />
      <p>{i18n.descripcion}</p>
      {/* <button onClick={() => navigate("/")}>Ir a la Home</button> */}
      <Link to='/' >{i18n.button}</Link>
    </>
  )
}