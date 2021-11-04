import React from 'react'
import Menu from '../components/menu'
import BgDeathProof from '../assets/images/death.jpg'
import PageHeader from '../components/pageHeader'
import ContentText from '../components/content-text'
import styled from 'styled-components'

const DeathProof = () => {
  return (
    <div>
      <Menu />
      <PageHeader name="A Prova de Morte" small="de Quentin Tarantino" />
      <DeathContent>
         <ImgPoster src={BgDeathProof} alt="Poster A prova de Morte"/>
         <ContentText>
            O dublê Mike (Kurt Russell) é um profissional que gosta de levar mulheres
            inocentes para passeios de carro mortais em suas horas vagas. Ele adaptou seu
            carro para impactos máximos. Enquanto provoca acidentes e as vítimas se acumulam,
            ele se safa sem praticamente nenhum arranhão. Mas ele não esperava pelo grupo de
            mulheres duronas que inclui Zoe Bell, dublê na vida real.
        </ContentText>
      </DeathContent>
  </div>
  )
}

export default DeathProof;

const DeathContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  `
const ImgPoster = styled.img`
  width:600px;
  height: 400px;
`
