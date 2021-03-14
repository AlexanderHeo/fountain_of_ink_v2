import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ button }) => (
  <div className='section-button-container one'>
    <Link to={`/${button.linkTo}`}>
      <div className='section-button' />
    </Link>
    {
      button.title
        ? <>
          <div className='button-title'>{button.title}</div>
          <div className='button-description'>{button.description}</div>
          <div className='button-price'>{button.price && '$'}{button.price}</div>
        </>
        : <span>{button.button}</span>
    }
  </div>
)

export default Button
