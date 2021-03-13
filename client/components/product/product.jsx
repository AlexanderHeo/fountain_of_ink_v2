import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Product extends Component {
  render() {
    return (
      <Container>
        <Link to='/'>hello</Link>
        <Link to='/'>hello</Link>
        <Link to='/'>hello</Link>
        <Link to='/'>hello</Link>
        <Link to='/'>hello</Link>
        <Link to='/'>hello</Link>
        <Link to='/'>hello</Link>
        <Link to='/'>hello</Link>
      </Container>
    )
  }
}

export default Product

const Container = styled.div`
	font-size: 10rem;
	width: 100%;
	height: 100%;
`
