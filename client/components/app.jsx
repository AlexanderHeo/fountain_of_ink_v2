import React, { Component } from 'react'
import styled from 'styled-components'
import HomePage from './homepage'
import Footer from './UI/footer'
import Header from './UI/header'
import Scroll from './UI/scroll-to-top'

export default class App extends Component {
  render() {
    return (
      <Container>
        <Header />
        <HomePage />
        <Footer />
        <Scroll />
      </Container>
    )
  }
}

const Container = styled.div`
	width: 100%;
	height: 100%;
	.scroll-to-top {
		width: 50px;
		height: 50px;
		position: fixed;
		bottom: 30px;
		right: 20px;
	}
`
