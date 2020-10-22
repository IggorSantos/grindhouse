import React from 'react'
import Bg from '../../assets/images/Grindhouse_banner.jpg'
import Menu from '../../components/menu/index'
import './styles.css'

export default () => {
  return(
    <div id="page-landing">
    <Menu />
    <img src={Bg} alt="Background" className="img" />
    </div>
  )
}
