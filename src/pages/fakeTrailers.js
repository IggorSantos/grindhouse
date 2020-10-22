import React from 'react'
import Menu from '../components/menu'
import './styles.css'

export default () => {
  return (
    <div id="page">
     <Menu />
     <h2>Trailers Falsos</h2>
     <div className="container">
      Para simular a experiencia de uma grindhouse,foram criados trailers falsos exclusivamente
      para o filme
     </div>
     <div className="imgPoster">
      <iframe width="750" height="500" src="https://www.youtube.com/embed/51nzkz-H9Hk"
      frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
     </div>
    <div className="container-fake">
    São eles:
    <ul>
     <li>
      Machete:Rodriguez dirige esse segmento, escrito em 1993 como um filme para o ator Danny Trejo
      (frequente colaborador) para parodiar uma série de filmes como Charles Bronson e Jean Claude Van Damme.
      Seguindo um assassino de aluguel mexicano traído por seus contratantes.
      Esse trailer falso acabou virando um filme realmente em 2010.
     </li>
     <li>
      Dirigido por Rob Zombie, é inspirado em filmes com nazistas dos anos 70, mostrando um plano secreto do Dr.
      Heinrich von Strasser (Bill Moseley) da SS de transformar mulheres em lobisomens.
      Nicolas Cage aparece como Fu Manchu.
    </li>
    <li>
      Dirigido por Edgar Wright (Todo Mundo Quase Morto), é homenagem aos filmes de terror italianos dos anos 70,
      com narração assustadora, mansões assombradas, e história quase sem nexo.
    </li>
    <li>
      Eli Roth (Cabin Fever) dirige esse segmento, um filme de assassinos passado no Dia de Ação de Graças
      (parodiando outros passados em feriados como Halloween, Natal Sangrento e Dia dos Namorados Macabro).
    </li>
    <li>
     Mais um trailer que ganhou longa-metragem.
     A história, dirigida por Jason Eisener, trata sobre um andarilho que faz justiça com as próprias mãos,
     armado de uma escopeta.
    </li>
    </ul>
     </div>
    </div>
  )
}
