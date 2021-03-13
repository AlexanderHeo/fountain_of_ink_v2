import React from 'react'
import SectionButton from './section-button'

const Section = ({ imgSrc, imgTitle, title, button }) => {
  const { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps } = button
  return (
    <section className='section'>
      <div className='image-section'>
        <img className='image' src={imgSrc} />
        <span className='image-title'>{imgTitle}</span>
      </div>
      <div>
        <div className='titleContainer'>
          <span className='title'>{title}</span>
        </div>
        <div className='links'>
          <SectionButton button={buttonOneProps} />
          <SectionButton button={buttonTwoProps} />
          <SectionButton button={buttonThreeProps} />
          <SectionButton button={buttonFourProps} />
        </div>
      </div>
    </section>
  )
}
export default Section
