import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './homepage'
import Accessories from './product/accessories'
import FountainPens from './product/fountainpens'
import Inks from './product/inks'
import Paper from './product/paper'
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
            <Route path='/home' component={HomePage} />
            <Route path='/fountainpens' exact component={FountainPens} />
            <Route path='/inks' exact component={Inks} />
            <Route path='/paper' exact component={Paper} />
            <Route path='/accessories' exact component={Accessories} />
          </Switch>
          <Redirect from='/' to='/home' />
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
	.container {
		transform: translateY(10px);
		opacity: 0.5
	}
	.container.mount {
		animation: containerMount 0.4s ease-in forwards;
	}
	@keyframes containerMount {
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
`
