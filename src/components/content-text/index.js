import React from 'react'
import styled from 'styled-components'

const ContentText = ({ children }) => {
  return(
    <Container>
      {children}
    </Container>
  )
}

export default ContentText;

const Container = styled.div`
  width: 30%;
  height: 50%;
  border-style: solid;
  border-color: red;
`
