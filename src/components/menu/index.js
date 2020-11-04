import React from 'react'
import LogoGrindhouse from '../../assets/logos/grind.png'
import {Link} from 'react-router-dom'
import './styles.css'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'

export default () => {
  return(
    <nav className="menu">
      <Link to={'/'}>
        <img src={LogoGrindhouse} alt="Logo GrindHouse" />
      </Link>
      <div id="container-item">
        <Link to={'/about'} className="menu-item">SOBRE O PROJETO</Link> |
        <Link to={'/planetTerror'} className="menu-item">PLANETA TERROR</Link> |
        <Link to={'/deathProof'} className="menu-item">A PROVA DE MORTE</Link> |
        <Link to={'/fakeTrailers'} className="menu-item">TRAILERS FALSOS</Link>
      </div>
      <div className="menu-item">
        <FiFacebook size={26} color="red" />
        <FiTwitter size={26} color="red" />
        <FiInstagram size={26} color="red" />
      </div>

    </nav>


  )
}
