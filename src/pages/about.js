import React from 'react'
import Menu from '../components/menu'
import PosterDuplo from '../assets/images/about.jpg'
import PageHeader from '../components/pageHeader'
import Footer from '../components/footer'
import ContentText from '../components/content-text'
import styled from 'styled-components'

const About = () => {
  return (
    <div>
      <Menu />
      <PageHeader name="O Projeto"/>
        <AboutContent>
           <ImgPoster src={PosterDuplo} alt="Poster Grindhouse" />
           <ContentText>
             Grindhouse é um filme americano de 2007, escrito, dirigido e produzido
             por Quentin Tarantino e Robert Rodriguez. O projeto é uma homenagem em forma de paródia
             aos filmes de horror da década de 1970.
          </ContentText>
        </AboutContent>
      <Footer />
  </div>
  )
}

export default About;

const AboutContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  `
const ImgPoster = styled.img`
  width:600px;
  height: 400px;
`
