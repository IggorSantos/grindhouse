import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return(
    <ContainerFooter>
      <ContentFooter>Desenvolvido por Igor Santos</ContentFooter>
    </ContainerFooter>
  )
}

export default Footer;

const ContainerFooter = styled.footer`
  background-color: black;
  margin-top: 5%;
  position: fixed;
  width: 100%
`

const ContentFooter = styled.p`
  color: red;
  text-align: center;
`
