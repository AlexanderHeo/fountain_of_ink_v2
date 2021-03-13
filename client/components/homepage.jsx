import React, { Component } from 'react'
import styled from 'styled-components'
import Sample from '../../server/public/images/samplepic.jpg'
import Section from './homepage/section'

class HomePage extends Component {
  render() {

    let buttonOneProps = {
      button: 'Fountain Pens',
      title: '',
      description: '',
      price: ''
    }
    let buttonTwoProps = {
      button: 'Ink',
      title: '',
      description: '',
      price: ''
    }
    let buttonThreeProps = {
      button: 'Paper',
      title: '',
      description: '',
      price: ''
    }
    let buttonFourProps = {
      button: 'Accessories',
      title: '',
      description: '',
      price: ''
    }
    const CATEGORY = { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps }
    buttonOneProps = {
      button: 'Pen',
      title: 'Pilot',
      description: 'Falcon',
      price: '100'
    }
    buttonTwoProps = {
      button: 'Ink',
      title: 'Diamine',
      description: 'Oxblood',
      price: '12'
    }
    buttonThreeProps = {
      button: 'Pen',
      title: 'Moonman',
      description: 'Demonstrator',
      price: '16'
    }
    buttonFourProps = {
      button: 'Paper',
      title: 'Loosesheets',
      description: 'Best loosesheets',
      price: '5'
    }
    const ARRIVAL = { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps }
    return (
      <Container>
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
	.image {
		width: 100%;
	}
	.image-title {
		width: 45%;
		height: 50%;
		position: absolute;
		background-color: rgba(255, 255, 255, 0.7);
		border-radius: 3px;
		font-size: 2rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.titleContainer {
		padding: 68px 0;
		text-align: center;
		font-size: 1.7rem;
	}
	.links {
		display: flex;
		justify-content: center;
		padding: 0 12px 130px 12px;
	}
	.section-button-container {
		width: calc(100vw * 0.195);
		height: calc(100vw * 0.195);
		margin: 0 6px;
	}
	.section-button {
		width: 100%;
		height: 100%;
		background-image: url('../../server/public/images/samplepic.jpg');
		background-position: center;
		background-size: cover;
	}
`
