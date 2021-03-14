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
        <div className='color-name'>black</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button blue' />
        <div className='color-name'>blue</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button brown' />
        <div className='color-name'>brown</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button green' />
        <div className='color-name'>green</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button gray' />
        <div className='color-name'>gray</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button orange' />
        <div className='color-name'>orange</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button pink' />
        <div className='color-name'>pink</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button purple' />
        <div className='color-name'>purple</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button red' />
        <div className='color-name'>red</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button turqoise' />
        <div className='color-name'>turqoise</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button yellow' />
        <div className='color-name'>yellow</div>
      </div>
      <div className='color-button-container'>
        <button className='color-button white' />
        <div className='color-name'>white</div>
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
		height: calc(100vw * 0.13);
		border: 0;
		border-radius: 0.3rem;
	}
	.color-name {
		text-align: center;
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
