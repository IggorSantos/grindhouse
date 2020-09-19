import React from 'react'
import Menu from '../components/menu'
import PosterPlanetTerror from '../assets/images/planeta-terror.jpg'
import './styles.css'

export default () => {
  return (
    <div>
    <Menu />
    <h2>Planeta Terror</h2>
    <div className="container">
    Uma experiência fracassada libera vírus que transforma humanos em zumbis sedentos de sangue e carnívoros.
    El Wray, Cherry, um médico e o xerife unem forças para sobreviver à noite, quando os mutantes ameaçam tomar
    a cidade e o mundo.
    </div>
    <div className="containerPoster">
     <img src={PosterPlanetTerror} alt="Poster Grindhouse" className="imgPoster" />
    </div>
    <div className="container">
    Esse filme tem a direção de Robert Rodriguez 
     </div>
    </div>
  )
}
