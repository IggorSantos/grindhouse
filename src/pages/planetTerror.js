import React from 'react'
import Menu from '../components/menu'
import BgPlanetTerror from '../assets/images/terror-wallpaper.jpg'
import PageHeader from '../components/pageHeader'
import Footer from '../components/footer'
import './styles.css'

export default () => {
  return (
    <div id="page">
    <Menu />
    <PageHeader name="Planeta Terror" small="de Robert Rodriguez" />
    <div className="imgPoster">
     <img src={BgPlanetTerror} alt="Poster Grindhouse" />
    </div>
    <Footer />
  </div>
  )
}
