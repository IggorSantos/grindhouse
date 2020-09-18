import React from 'react'
import LogoGrindhouse from '../assets/logos/grind.png'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

export default () => {
  return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <Link to={'/'}class="navbar-brand" >
       <img src={LogoGrindhouse} alt="Logo GrindHouse" />
     </Link>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link to={'/about'} class="nav-link">Sobre |</Link>
          </li>
          <li class="nav-item active">
            <Link to={'/planetTerror'} class="nav-link">Planeta Terror |</Link>
          </li>
          <li class="nav-item active">
            <Link to={'/deathProof'} class="nav-link">A Prova de Morte |</Link>
          </li>
          <li class="nav-item active">
            <Link to={'/fakeTrailers'} class="nav-link">Trailers Falsos |</Link>
          </li>
        </ul>
      </div>
    </nav>
    </div>
  )
}
