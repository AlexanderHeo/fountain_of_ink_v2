import React from 'react'
import styled from 'styled-components'

const ColorsModule = () => (
  <Module>
    <div className='title-container'>
      <span className='title'>Shop by Color</span>
    </div>
    <div className='links'>
      <div className='color-button-container'>
        <button className='color-button black' />
        <span>black</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button blue' />
        <span>blue</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button brown' />
        <span>brown</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button green' />
        <span>green</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button gray' />
        <span>gray</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button orange' />
        <span>orange</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button pink' />
        <span>pink</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button purple' />
        <span>purple</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button red' />
        <span>red</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button turqoise' />
        <span>turqoise</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button yellow' />
        <span>yellow</span>
      </div>
      <div className='color-button-container'>
        <button className='color-button white' />
        <span>white</span>
      </div>
    </div>
  </Module>
)

export default ColorsModule

const Module = styled.div`
	display: flex;
	flex-flow: column;
	align-items: center;
	.title-container {
		text-align: center;
		padding: 38px 0;
		font-size: 1.7rem;
	}
	.links {
		display: grid;
		justify-content: center;
		grid-template-columns: 14% 14% 14% 14% 14% 14%;
		width: 100%;
		grid-gap: 0.5rem;
		padding: 0 1rem 5rem 1rem;
	}
	.color-button-container {
		margin-bottom: 1rem;
	}
	.color-button {
		width: 100%;
		height: 100%;
		border: 0;
		border-radius: 0.3rem;
	}
	.black {
		background-color: black;
	}
	.blue {
		background-color: blue;
	}
	.brown {
		background-color: brown;
	}
	.green {
		background-color: green;
	}
	.gray {
		background-color: gray;
	}
	.orange {
		background-color: orange;
	}
	.pink {
		background-color: hotpink;
	}
	.purple {
		background-color: purple;
	}
	.red {
		background-color: red;
	}
	.turqoise {
		background-color: turquoise;
	}
	.yellow {
		background-color: yellow;
	}
	.white {
		background-color: white;
		border: 1px solid black;
	}
`
