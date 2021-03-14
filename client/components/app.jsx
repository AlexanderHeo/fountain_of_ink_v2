import React, { Component } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import styled from 'styled-components'
import HomePage from './homepage'
import Accessories from './product/accessories'
import FountainPens from './product/fountainpens'
import Inks from './product/inks'
import Paper from './product/paper'
import Product from './product/productDisplayList'
import Footer from './UI/footer'
import Header from './UI/header'
import NavBar from './UI/navBar'
import Scroll from './UI/scroll-to-top'

export default class App extends Component {
	state = {
	  isVisible: false
	}

	componentDidMount = () => {
	  const scroll = this
	  document.addEventListener('scroll', () => {
	    scroll.toggleVisibility()
	  })
	}

	toggleVisibility = () => {
	  if (window.pageYOffset > 300) {
	    this.setState({ isVisible: true })
	  } else {
	    this.setState({ isVisible: false })
	  }
	}

	render() {
	  return (
	    <Router>
	      <Container>
	        <Header />
	        <NavBar isVisible={this.state.isVisible} />
	        <Switch>
	          <Route path='/home' component={HomePage} />
	          <Route path='/fountainpens' exact component={FountainPens} />
	          <Route path='/inks' exact component={Inks} />
	          <Route path='/paper' exact component={Paper} />
	          <Route path='/accessories' exact component={Accessories} />
	          <Route path='/fountainpens/:category' render={props => <Product {...props}/>} />
	          <Route path='/inks/:category' render={props => <Product {...props}/>} />
	          <Route path='/paper/:category' render={props => <Product {...props}/>} />
	          <Route path='/accessories/:category' render={props => <Product {...props}/>} />
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
		animation: containerMount 0.3s ease-in forwards;
	}
	.navbar {
		position: sticky;
		top: 0;
		z-index: 1;
		display: none;
		transform: translateY(10px);
	}
	.hide {
		display: none;
		transform: translateY(0);
	}
	.show {
		display: inherit;
		animation: show 0.2s ease-in forwards;
		opacity: 0
	}
	@keyframes containerMount {
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
	@keyframes show {
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}
`
