import React, { Component } from 'react'
import styled from 'styled-components'
import Sample from '../../../server/public/images/samplepic.jpg'
import ButtonsModule from '../UI/buttonsModule'

class Paper extends Component {
	state = {
	  data: ''
	}

	componentDidMount = () => {
	  window.scrollTo(0, 0)
	  const category = this.props.location.state
	  this.setState({ date: category })
	}

	render() {
	  const buttonOneProps = { button: 'Notebooks' }
	  const buttonTwoProps = { button: 'Notepads' }
	  const buttonThreeProps = { button: 'Tablets and Loose Sheets' }
	  const buttonFourProps = { button: 'Accessories' }
	  const button = { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps }
	  return (
	    <Container>
	      <div className='product-image-container'>
	      	<img className='product-image' src={Sample} />
	        <div className='product-image-button-container'>
	          <div className='product-image-button-text'>Paper</div>
	          <div className='product-image-button-description'>The best paper for writing with fountain pens, bound in different ways, lined or dotted.</div>
	        	<button className='product-image-button button'>See All Paper Products</button>
	        </div>
	      </div>
	      <ButtonsModule button={button} title='Shop by Style' />
	    </Container>
	  )
	}
}

export default Paper

const Container = styled.div`
	width: 100%;
	height: 100%;
	.product-image-container {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.product-image {
		width: 100%;
	}
	.product-image-button-container {
		position: absolute;
		display: flex;
		align-items: center;
		flex-flow: column;
		background-color: rgba(255, 255, 255, 0.7);
		padding: 3rem 0;
	}
	.product-image-button-text {
		font-size: 2.3rem;
	}
	.product-image-button-description {
		width: 60%;
		text-align: center;
		padding: 2rem 0;
	}
	.product-image-button {
		border: 1px solid black;
		border-radius: 0.3rem;
		padding: 1.5rem 1rem;
	}
`
