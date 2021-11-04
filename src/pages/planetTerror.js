import React from 'react'
import Menu from '../components/menu'
import BgPlanetTerror from '../assets/images/terror-wallpaper.jpg'
import PageHeader from '../components/pageHeader'
import ContentText from '../components/content-text'
import styled from 'styled-components'


const PlanetTerror = () => {
  return (
    <div>
      <Menu />
      <PageHeader name="Planeta Terror" small="de Robert Rodriguez" />
      <PlanetContent>
         <ImgPoster src={BgPlanetTerror} alt="Poster Grindhouse" />
         <ContentText>
            Uma experiência fracassada libera vírus que transforma humanos em zumbis
            sedentos de sangue e carnívoros. El Wray, Cherry, um médico e o xerife unem
            forças para sobreviver à noite, quando os mutantes ameaçam tomar a cidade e
            o mundo.
         </ContentText>
      </PlanetContent>
  </div>
  )
}

export default PlanetTerror;

const PlanetContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  `
const ImgPoster = styled.img`
  width:600px;
  height: 400px;
`
