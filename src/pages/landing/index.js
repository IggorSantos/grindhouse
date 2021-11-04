import React from 'react'
import Bg from '../../assets/images/Grindhouse_banner.jpg'
import Menu from '../../components/menu/index'
import styled from 'styled-components'

const Landing = () => {
  return(
    <div>
      <Menu />
      <Img src={Bg} alt="Background" className="img" />
    </div>
  )
}

export default Landing;

const Img = styled.img `
  width: 100%;
  height: 100%;
  padding-top: 2%;
  `
