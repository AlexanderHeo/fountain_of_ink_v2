import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <h1>Fountain of Ink</h1>
    </Container>
  )
}

export default Header

const Container = styled.div`
	text-align: center;
	padding: 30px 0;
	border: 1px solid green;
`
