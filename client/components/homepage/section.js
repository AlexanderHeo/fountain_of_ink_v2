import React from 'react'
import SectionButton from './section-button'

const Section = ({ imgSrc, title, category }) => {
  const { categoryButtonOneProps, categoryButtonTwoProps, categoryButtonThreeProps, categoryButtonFourProps } = category
  return (
    <section>
      <img className='image' src={imgSrc} />
      <div>
        <div className='titleContainer'>
          <span className='title'>{title}</span>
        </div>
        <div className='links'>
          <SectionButton button={categoryButtonOneProps} />
          <SectionButton button={categoryButtonTwoProps} />
          <SectionButton button={categoryButtonThreeProps} />
          <SectionButton button={categoryButtonFourProps} />
        </div>
      </div>
    </section>
  )
}
export default Section
