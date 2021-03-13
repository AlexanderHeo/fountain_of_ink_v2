import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class Product extends Component {
	state = {
	  data: ''
	}

	componentDidMount = () => {
	  const category = this.props.location.state
	  this.setState({ date: category })
	}

	render() {
	  return (
	    <Container>
	      <div><Link to='/home'>{this.props.location.state}</Link></div>
	      <div><Link to='/home'>{this.props.location.state}</Link></div>
	      <div><Link to='/home'>{this.props.location.state}</Link></div>
	      <div><Link to='/home'>{this.props.location.state}</Link></div>
	      <div><Link to='/home'>{this.props.location.state}</Link></div>
	      <div><Link to='/home'>{this.props.location.state}</Link></div>
	      <div><Link to='/home'>{this.props.location.state}</Link></div>
	      <div><Link to='/home'>{this.props.location.state}</Link></div>
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
