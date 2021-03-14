import React, { Component } from 'react'
import styled from 'styled-components'
import Picture from '../../../server/public/images/samplepic.jpg'

class ProductDisplay extends Component {
	state = {
	  mounted: false
	}

	componentDidMount = () => {
	  window.scrollTo(0, 0)
	  setTimeout(() => {
	    this.setState({ mounted: true })
	  }, 0)
	}

	render() {
	  return (
	    <Container className={this.state.mounted ? 'container mount' : 'container'}>
	      <div className='product-image-container'>
	        <img className='product-image' src={`/${Picture}`} />
	        <div className='product-image-button-container'>
	          <div className='product-image-button-text'>{this.props.match.params.category}</div>
	        </div>
	      </div>
	    </Container>
	  )
	}
}

export default ProductDisplay

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
`
