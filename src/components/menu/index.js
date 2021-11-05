import React from 'react'
import LogoGrindhouse from '../../assets/logos/grind.png'
import {Link} from 'react-router-dom'
import {FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
import styled from 'styled-components'

const Menu = () => {
  return(
   <ContainerMenu>
      <Link to={'/'}>
        <ImgMenu src={LogoGrindhouse} alt="Logo GrindHouse" />
      </Link>
      <ContainerItens>
        <MenuItem to={'/about'} className="menu-item">SOBRE O PROJETO</MenuItem>
        <MenuItem to={'/planetTerror'} className="menu-item">PLANETA TERROR</MenuItem>
        <MenuItem to={'/deathProof'} className="menu-item">A PROVA DE MORTE</MenuItem>
      </ContainerItens>
      <MenuIcon>
        <FiFacebook size={26} color="red" />
        <FiTwitter size={26} color="red" />
        <FiInstagram size={26} color="red" />
      </MenuIcon>
     </ContainerMenu>
  )
}

export default Menu;

const ContainerMenu = styled.nav`
  background-color: black;
  display: flex;
  flex-direction: row;
`
const ImgMenu = styled.img`
  margin-top: 3%;
  padding: 5%;
`

const MenuItem = styled(Link)`
  padding: 5%;
  color: red;
`
const ContainerItens = styled.div`
  display: flex;
  flex-direction: row;
  align-Items: center;
  padding: 0 10%;
`

const MenuIcon = styled.div`
  display:flex;
  align-Items: center;
  margin-left: 15%;
  `
