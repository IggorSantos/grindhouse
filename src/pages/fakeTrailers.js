import React from 'react'
import Menu from '../components/menu'
import './styles.css'

export default () => {
  return (
    <div>
    <Menu />
    <h2>Trailers Falsos</h2>
    <div className="container">
    Para simular a experiencia de uma grindhouse,foram criados trailers falsos exclusivamente
    para o filme
    </div>
    <div className="containerPoster">
     <iframe width="750" height="500" src="https://www.youtube.com/embed/51nzkz-H9Hk"
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
     allowfullscreen></iframe>
    </div>
    <div className="container">
    Esse filme tem a direção de Robert Rodriguez
     </div>
    </div>
  )
}
