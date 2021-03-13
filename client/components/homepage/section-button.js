import React from 'react'

const SectionButton = ({ button }) => (
  <div className='section-button-container one'>
    <button className='section-button' />
    {
      !button.title && <span>{button.button}</span>
    }
    {
      button.title && <>
        <div className='button-title'>{button.title}</div>
        <div className='button-description'>{button.description}</div>
        <div className='button-price'>{button.price && '$'}{button.price}</div>
      </>
    }
  </div>
)

export default SectionButton
