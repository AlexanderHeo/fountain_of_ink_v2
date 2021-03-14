import React, { Component } from 'react'
import styled from 'styled-components'
import Sample from '../../../server/public/images/samplepic.jpg'

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
	        <img className='product-image' src={Sample} />
	        <div className='product-image-button-container'>
	          <div className='product-image-button-text'>Button Text</div>
	          <div className='product-image-button-description'>{this.props.match.params.category}</div>
	          <div className='product-image-button-description'>{this.props.match.params.category}</div>
	          <div className='product-image-button-description'>{this.props.match.params.category}</div>
	          <button className='product-image-buttonbutton'>Button</button>
	        </div>
	      </div>
	    </Container>
	  )
	}
}

export default ProductDisplay

const Container = styled.div`
	position: initial;
`
