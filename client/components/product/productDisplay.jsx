import React, { Component } from 'react'
import styled from 'styled-components'
import Picture from '../../../server/public/images/samplepic.jpg'
import ProductDisplayList from './productDisplaylist'

class ProductDisplay extends Component {
	state = {
	  mounted: false,
	  data: []
	}

	componentDidMount = async () => {
	  window.scrollTo(0, 0)
	  setTimeout(() => {
	    this.setState({ mounted: true })
	  }, 0)
	  const { pathname } = this.props.location
	  const category = pathname.split('/')[1]
	  const parameter = pathname.split('/')[2]
	  const init = {
	    method: 'GET',
	    header: { 'Content-Type': 'application/json' }
	  }
	  const response = await fetch(`/api/${category}/${parameter}`, init)
	  const data = await response.json()
	  if (data) this.setState({ data: data })
	}

	render() {
	  return (
	    <Container className={this.state.mounted ? 'container mount' : 'container'}>
	      <div className='product-image-container'>
	        <img className='product-image' src={`/${Picture}`} />
	      </div>
	      <div className='product-display-list'>
	        { this.state.data.map(x => {
	          return <ProductDisplayList key={x.id} props={x} />
	        })}
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
		text-align: center;
		margin: 12px calc((100% * .1) / 6) 0;
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
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		margin: 2rem 0;
	}
	.product {
		text-align: center;
		margin: 0 calc((100vw * .1) / 6);
	}
`
