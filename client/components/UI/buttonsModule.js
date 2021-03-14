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
		transition: 0.2s ease-out;
		position: relative;
		display: flex;
		flex-flow: column;
		justify-content: center;
		align-items: center;
		transition: transform 0.3s ease-in;
	}
	.section-button-container:hover {
		cursor: pointer;
		transform: translateY(-10px);
	}
	.section-button-container:hover .button-text {
		background-color: rgb(20, 20, 20);
		color: rgb(240, 240, 240);
	}
	.section-button-container:hover .button-overlay {
		background-color: rgb(20, 20, 20);
		color: rgb(240, 240, 240);
	}
	.section-button-container .button-text {
		text-align: center;
	}
	.section-button {
		width: 100%;
		height: 100%;
		background-image: url('../../../server/public/images/samplepic.jpg');
		background-position: center;
		background-size: cover;
	}
	.button-text {
		width: 100%;
		pointer-events: none;
	}
	.button-overlay {
		position: absolute;
		padding: 10%;
		border-radius: 0.2rem;
		background-color: rgba(240, 240, 240, 0.7);
		pointer-events: none;
	}
`
