import React from 'react'

const Button = ({ button }) => (
  <div className='section-button-container one'>
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
  </div>
)

export default Button
