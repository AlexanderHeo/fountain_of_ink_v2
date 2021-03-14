import React, { Component } from 'react'
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
	        <li>Brands</li>
	        <li>Pens</li>
	        <li>Inks</li>
	        <li>Paper</li>
	        <li>Accessories</li>
	      </ul>
	    </Nav>
	  )
	}
}

export default Navbar

const Nav = styled.div`
	padding: 6px 0;
	border-top: 1px solid black;
	border-bottom: 1px solid black;
	background-color: #fff;
	.ul {
		display: flex;
		justify-content: flex-end;
		li {
			width: 80px;
			list-style: none;
		}
	}
`
