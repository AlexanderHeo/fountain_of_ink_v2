import React from 'react'
import { Link } from 'react-router-dom'
import SectionButton from './section-button'

const Section = ({ imgSrc, imgTitle, title, button, handleClick }) => {
  const { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps } = button
  return (
    <section className='section'>
      <Link className='image-section' to='/product' >
        <img className='image' src={imgSrc} />
        <span className='image-title'>{imgTitle}</span>
      </Link>
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
