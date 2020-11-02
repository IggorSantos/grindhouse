import React from 'react'
import Menu from '../components/menu'
import BgDeathProof from '../assets/images/death.jpg'
import PageHeader from '../components/pageHeader'
import './styles.css'

export default () => {
  return (
    <div id="page">
    <Menu />
    <PageHeader name="A Prova de Morte" small="de Quentin Tarantino" />
    <div className="imgPoster">
     <img src={BgDeathProof} alt="Poster A prova de Morte"/>
    </div>
  </div>
  )
}
