import React from 'react'
import styled from 'styled-components'
import Button from './button'

const ButtonsModule = ({ button, title }) => {
  const { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps } = button

  return (
    <Module>
      <div className='titleContainer'>
        <span className='title'>{title}</span>
      </div>
      <div className='links'>
        <Button button={buttonOneProps} />
        <Button button={buttonTwoProps} />
        <Button button={buttonThreeProps} />
        <Button button={buttonFourProps} />
      </div>
    </Module>
  )
}

export default ButtonsModule

const Module = styled.div`
	.titleContainer {
		padding: 68px 0;
		text-align: center;
		font-size: 1.7rem;
	}
	.links {
		display: flex;
		justify-content: center;
		padding: 0 1rem 10rem 1rem;
	}
	.section-button-container {
		width: calc(100vw * 0.195);
		height: calc(100vw * 0.195);
		margin: 0 6px;
	}
	.section-button {
		width: 100%;
		height: 100%;
		background-image: url('../../../server/public/images/samplepic.jpg');
		background-position: center;
		background-size: cover;
	}
`
