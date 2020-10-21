import React from 'react'
import LogoGrindhouse from '../../assets/logos/grind.png'
import {Link} from 'react-router-dom'
import './styles.css'

export default () => {
  return(
    <nav className="menu">
      <Link to={'/'}>
        <img src={LogoGrindhouse} alt="Logo GrindHouse" />
      </Link>
      <Link to={'/about'} className="menu-item">SOBRE</Link> |
      <Link to={'/planetTerror'} className="menu-item">PLANETA TERROR</Link> |
      <Link to={'/deathProof'} className="menu-item">A PROVA DE MORTE</Link> |
      <Link to={'/fakeTrailers'} className="menu-item">TRAILERS FALSOS</Link>

    </nav>


  )
}
