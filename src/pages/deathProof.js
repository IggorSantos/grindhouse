import React from 'react'
import Menu from '../components/menu'
import PosterDeathProof from '../assets/images/deathproof.jpg'
import './styles.css'

export default () => {
  return (
    <div id="page">
    <Menu />
    <h2>A Prova de Morte</h2>
    <div className="container">
    O dublê Mike (Kurt Russell) é um profissional que gosta de levar mulheres inocentes para
    passeios de carro mortais em suas horas vagas.
    Ele adaptou seu carro para impactos máximos.
    Enquanto provoca acidentes e as vítimas se acumulam, ele se safa sem praticamente nenhum arranhão.
    Mas ele não esperava pelo grupo de mulheres duronas que inclui Zoe Bell, dublê na vida real.
    </div>
    <div className="imgPoster">
     <img src={PosterDeathProof} alt="Poster A prova de Morte"/>
    </div>
  </div>
  )
}
