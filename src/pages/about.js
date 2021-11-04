import React from 'react'
import Menu from '../components/menu'
import PosterDuplo from '../assets/images/about.jpg'
import PageHeader from '../components/pageHeader'
import Footer from '../components/footer'
import './styles.css'

export default () => {
  return (
    <div id="page">
      <Menu />
      <PageHeader name="O Projeto"/>
        <div className="imgPoster">
         <img src={PosterDuplo} alt="Poster Grindhouse" />
        </div>
        <div className="container-texto">
         <p>Grindhouse é um filme americano de 2007, escrito, dirigido e produzido
         por Quentin Tarantino e Robert Rodriguez, com colaborações de Eli Roth,
         Rob Zombie e Edgar Wright. O projeto é uma homenagem em forma de paródia
         aos filmes de horror da década de 1970.</p>
        </div>
      <Footer />
  </div>
  )
}
