import React from 'react'
import styled from 'styled-components'

const PageHeader = (props) => {
  return(
    <Header>
      <h2>{props.name} <small>{props.small}</small></h2>
    </Header>
  )
}

export default PageHeader;

const Header = styled.header`
  text-align: center
`
