import React, { Component } from 'react'
import styled from 'styled-components'
import HomePage from './homepage'
import Footer from './UI/footer'
import Header from './UI/header'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <HomePage />
        <Footer />
      </Container>
    )
  }
}

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`
