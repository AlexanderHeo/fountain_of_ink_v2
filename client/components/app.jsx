import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './homepage'
import Product from './product/product'
import Footer from './UI/footer'
import Header from './UI/header'
import Scroll from './UI/scroll-to-top'

export default class App extends Component {
  render() {
	  return (
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route path='/' exact component={HomePage} />
            <Route path='/product' exact component={Product} />
          </Switch>
          <Footer />
          <Scroll />
        </Container>
      </Router>
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
