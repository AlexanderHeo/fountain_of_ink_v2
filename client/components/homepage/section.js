import React from 'react'
import { Link } from 'react-router-dom'
import SectionButton from './section-button'

const Section = ({ imgSrc, imgTitle, title, button, handleClick }) => {
  const { buttonOneProps, buttonTwoProps, buttonThreeProps, buttonFourProps } = button
  let path
  switch (imgTitle) {
    case 'Fountain Pens':
      path = '/fountainpens'
      break
    case 'Inks':
      path = '/inks'
      break
    case 'Paper':
      path = '/paper'
      break
    case 'Accessories':
      path = '/accessories'
      break
  }
  return (
    <section className='section'>
      <Link className='image-section' to={{
        pathname: path,
        state: imgTitle
      }} >
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
