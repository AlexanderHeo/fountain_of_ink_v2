import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

class Navbar extends Component {
	state = {
	  navbar: 'navbar hide'
	}

	componentDidUpdate = prevProps => {
	  if (this.props.isVisible !== prevProps.isVisible) {
	    this.props.isVisible ? this.setState({ navbar: 'navbar show' }) : this.setState({ navbar: 'navbar hide' })
	  }
	}

	render() {
	  return (
	    <Nav className={this.state.navbar}>
	      <ul className='ul'>
	        <li><NavLink to='/fountainpens' activeStyle={{ borderBottom: '3px double black', borderTop: '3px double black', padding: '3px' }}>Fountain Pens</NavLink></li>
	        <li><NavLink to='/inks' activeStyle={{ borderBottom: '3px double black', borderTop: '3px double black', padding: '3px' }}>Inks</NavLink></li>
	        <li><NavLink to='/paper' activeStyle={{ borderBottom: '3px double black', borderTop: '3px double black', padding: '3px' }}>Paper</NavLink></li>
	        <li><NavLink to='/accessories' activeStyle={{ borderBottom: '3px double black', borderTop: '3px double black', padding: '3px' }}>Accessories</NavLink></li>
	      </ul>
	    </Nav>
	  )
	}
}

export default Navbar

const Nav = styled.div`
	padding: 12px;
	background-color: #fff;
	.ul {
		display: flex;
		justify-content: flex-end;
		li {
			margin: 0 1rem;
			list-style: none;
			transition: transform 0.2s ease-in;
			border-top: 3px double transparent;
			border-bottom: 3px double transparent;
			padding: 3px;
		}
		a {
			width: 100%;
			text-decoration: none;
			color: black
		}
		a:visited {
			color: black;
		}
		li:hover {
			border-top: 3px double black;
			border-bottom: 3px double black;
		}
	}
`
