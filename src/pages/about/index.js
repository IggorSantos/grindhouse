import React from 'react'
import Menu from '../../components/menu'
import Poster from '../../assets/images/poster.jpg'
import './styles.css'

export default () => {
  return (
    <div>
    <Menu />
    <h2>GrindHouse</h2>
    <div>
     GrindHouse é um projeto idealizado pelos diretores:Quentin Tarantino e Robert Rodriguez,como forma de homenagear os filmes
     que eles assistiam nos anos 70 e 80.
     Os grindhouses eram locais em que se podiam ver dois filmes pelo preço de um,por esse motivo eram filmes de qualidade
     questionavel,geralmente eram filmes muito exagerados.
    </div>
    <img src={Poster} alt="Poster Grindhouse" className="imgPoster" />
    <p>
    Esse projeto consistia de dois filmes:Planeta Terror dirigido pelo Robert Rodriguez e A prova de morte dirigido
    pelo Quentin Tarantino.
    Eles foram exibidos juntos e entre os dois filmes foram exibidos trailers falso criados por outros cineastas que
    também emulavam os trailers dos filmes daquela época
     </p>
    <h2>Impressa</h2>
    <p>Bla bla bla bla bla bla bla </p>
    </div>
  )
}
