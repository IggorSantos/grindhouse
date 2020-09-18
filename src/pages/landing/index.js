import React from 'react'
import Bg from '../../assets/images/bg.jpg'
import Menu from '../../components/menu'
import './styles.css'

export default () => {
  return(
    <div>
    <Menu />
    <img src={Bg} alt="Background" className="img" />
    </div>
  )
}
