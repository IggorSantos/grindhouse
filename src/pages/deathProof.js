import React from 'react'
import Menu from '../components/menu'
import BgDeathProof from '../assets/images/death.jpg'
import PageHeader from '../components/pageHeader'
import './styles.css'

const DeathProof = () => {
  return (
    <div id="page">
    <Menu />
    <PageHeader name="A Prova de Morte" small="de Quentin Tarantino" />
    <div className="imgPoster">
     <img src={BgDeathProof} alt="Poster A prova de Morte"/>
    </div>
    <div className="container-texto">
     <p>O dublê Mike (Kurt Russell) é um profissional que gosta de levar mulheres
     inocentes para passeios de carro mortais em suas horas vagas. Ele adaptou seu
     carro para impactos máximos. Enquanto provoca acidentes e as vítimas se acumulam,
     ele se safa sem praticamente nenhum arranhão. Mas ele não esperava pelo grupo de
     mulheres duronas que inclui Zoe Bell, dublê na vida real.</p>
    </div>

  </div>
  )
}

export default DeathProof;
