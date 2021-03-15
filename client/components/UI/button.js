import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ button }) => (

  <Link to={{
    pathname: `/${button.linkTo}`,
    state: button
  }} className='section-button-container one'>
    <div className='section-button' />
    {
      button.title
        ? <>
          <div className='button-text'>{button.title}</div>
          <div className='button-text'>{button.description}</div>
          <div className='button-text'>{button.price && '$'}{button.price}</div>
        </>
        : <span className='button-overlay'>{button.button}</span>
    }
  </Link>
)

export default Button
