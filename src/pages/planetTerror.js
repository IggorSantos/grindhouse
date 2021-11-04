import React from 'react'
import Menu from '../components/menu'
import BgPlanetTerror from '../assets/images/terror-wallpaper.jpg'
import PageHeader from '../components/pageHeader'
import './styles.css'

const PlanetTerror = () => {
  return (
    <div id="page">
    <Menu />
    <PageHeader name="Planeta Terror" small="de Robert Rodriguez" />
    <div className="imgPoster">
     <img src={BgPlanetTerror} alt="Poster Grindhouse" />
    </div>
    <div className="container-texto">
     <p>Uma experiência fracassada libera vírus que transforma humanos em zumbis
     sedentos de sangue e carnívoros. El Wray, Cherry, um médico e o xerife unem
     forças para sobreviver à noite, quando os mutantes ameaçam tomar a cidade e
     o mundo.</p>
    </div>
  </div>
  )
}

export default PlanetTerror;
