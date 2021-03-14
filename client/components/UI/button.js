import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ button }) => (
  <Link to={`/${button.linkTo}`} className='section-button-container one'>
    <button className='section-button' />
    {
      button.title
        ? <>
          <div className='button-title'>{button.title}</div>
          <div className='button-description'>{button.description}</div>
          <div className='button-price'>{button.price && '$'}{button.price}</div>
        </>
        : <span>{button.button}</span>
    }
  </Link>
)

export default Button
