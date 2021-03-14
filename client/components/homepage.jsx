import React, { Component } from 'react'
import styled from 'styled-components'
import Sample from '../../server/public/images/samplepic.jpg'
import Section from './homepage/section'

class HomePage extends Component {
	state = {
	  mounted: false
	}

	componentDidMount = () => {
	  setTimeout(() => {
	    this.setState({ mounted: true })
	  }, 0)
	}

	render() {
	  let buttonOneProps = {
	    button: 'Fountain Pens',
	    linkTo: 'fountainpens'
	  }
	  let buttonTwoProps = {
	    button: 'Ink',
	    linkTo: 'inks'
	  }
	  let buttonThreeProps = {
	    button: 'Paper',
	    linkTo: 'paper'
	  }
	  let buttonFourProps = {
	    button: 'Accessories',
	    linkTo: 'accessories'
	  }
	  const CATEGORY = { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps }
	  buttonOneProps = {
	    button: 'Pen',
	    title: 'Pilot',
	    description: 'Falcon',
	    price: '100',
	    linkTo: 'fountainpens'
	  }
	  buttonTwoProps = {
	    button: 'Ink',
	    title: 'Diamine',
	    description: 'Oxblood',
	    price: '12',
	    linkTo: 'inks'
	  }
	  buttonThreeProps = {
	    button: 'Pen',
	    title: 'Moonman',
	    description: 'Demonstrator',
	    price: '16',
	    linkTo: 'fountainpens'
	  }
	  buttonFourProps = {
	    button: 'Paper',
	    title: 'Loosesheets',
	    description: 'Best loosesheets',
	    price: '5',
	    linkTo: 'fountainpens'
	  }
	  const ARRIVAL = { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps }

	  return (
	    <Container className={this.state.mounted ? 'container mount' : 'container' }>
	      <Section
	        imgSrc={Sample}
	        imgTitle='Fountain Pens'
	        title='Category'
	        button={CATEGORY}
	      />
	      <Section
	        imgSrc={Sample}
	        imgTitle='Inks'
	        title='New Arrival'
	        button={ARRIVAL}
	      />
	      <Section
	        imgSrc={Sample}
	        imgTitle='Paper'
	        title='Staff Picks'
	        button={ARRIVAL}
	      />
	      <Section
	        imgSrc={Sample}
	        imgTitle='Accessories'
	        title='Most Popular'
	        button={ARRIVAL}
	      />
	    </Container>
	  )
	}
}

export default HomePage

const Container = styled.div`
	.image-section {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.image-section:hover {
		cursor: pointer;
	}
	.image-section:hover .image-title {
		background-color: rgba(0, 0, 0, 0.8);
		color: white;
		transform: scale(1.05);
	}
	.image-section:visited {
		color: black;
	}
	.image {
		width: 100%;
	}
	.image-title {
		width: 45%;
		height: 50%;
		position: absolute;
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 0.3rem;
		font-size: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: 0.2s ease-in;
	}

`
