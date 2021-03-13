import React, { Component } from 'react'
import styled from 'styled-components'
import Sample from '../../server/public/images/samplepic.jpg'
import Section from './homepage/section'

class HomePage extends Component {
  render() {

    const categoryButtonOneProps = {
      button: 'Pen',
      title: 'Pilot',
      description: 'Falcon',
      price: '100'
    }
    const categoryButtonTwoProps = {
      button: 'Ink',
      title: 'Diamine',
      description: 'Oxblood',
      price: '12'
    }
    const categoryButtonThreeProps = {
      button: 'Pen',
      title: 'Moonman',
      description: 'Demonstrator',
      price: '16'
    }
    const categoryButtonFourProps = {
      button: 'Paper',
      title: 'Loosesheets',
      description: 'Best loosesheets',
      price: '5'
    }
    const CATEGORY = { categoryButtonOneProps, categoryButtonTwoProps, categoryButtonThreeProps, categoryButtonFourProps }
    return (
      <Container>
        <Section
          imgSrc={Sample}
          title='Category'
          category={CATEGORY}
        />
        <Section
          imgSrc={Sample}
          title='Category'
          category={CATEGORY}
        />
        <Section
          imgSrc={Sample}
          title='Category'
          category={CATEGORY}
        />
        <Section
          imgSrc={Sample}
          title='Category'
          category={CATEGORY}
        />
      </Container>
    )
  }
}

export default HomePage

const Container = styled.div`
	/* border: 10px solid red; */
	.image {
		width: 100%;
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
