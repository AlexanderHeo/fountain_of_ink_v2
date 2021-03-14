import React, { Component } from 'react'
import styled from 'styled-components'
import Picture from '../../../server/public/images/samplepic.jpg'

class ProductDisplayList extends Component {
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
	      <div className='product-display-list'>
	        <div className='product'>
	          <img className='product-image' src={`/${Picture}`} />
	          <div className='product-name'>{this.props.match.params.category}</div>
	          <div className='product-description'>Ipsem Lorem</div>
	          <div className='product-price'>$80</div>
	        </div>
	        <div className='product'>
	          <img className='product-image' src={`/${Picture}`} />
	          <div className='product-name'>{this.props.match.params.category}</div>
	          <div className='product-description'>Go Go Power Rangers</div>
	          <div className='product-price'>$400</div>
	        </div>
	        <div className='product'>
	          <img className='product-image' src={`/${Picture}`} />
	          <div className='product-name'>{this.props.match.params.category}</div>
	          <div className='product-description'>This is the way</div>
	          <div className='product-price'>$66</div>
	        </div>
	      </div>
	    </Container>
	  )
	}
}

export default ProductDisplayList

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
		border-radius: 0.3rem;
		padding: 3rem 0;
	}
	.product-image-button-text {
		font-size: 2.3rem;
		padding: 1rem 3rem;
	}

	.product-display-list {
		display: flex;
		justify-content: center;
		margin: 10rem 0;
	}
	.product {
		width: 30%;
		text-align: center;
		margin: 0 calc((100vw * .1) / 6);
	}
`
