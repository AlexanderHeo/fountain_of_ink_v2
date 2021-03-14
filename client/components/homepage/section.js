import React from 'react'
import { Link } from 'react-router-dom'
import ButtonsModule from '../UI/buttonsModule'

const Section = ({ imgSrc, imgTitle, title, button, handleClick }) => {
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
      <ButtonsModule
        button={button}
        title={title}
      />
    </section>
  )
}
export default Section
