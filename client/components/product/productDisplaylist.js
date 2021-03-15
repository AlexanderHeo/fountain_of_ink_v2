import React from 'react'
import Picture from '../../../server/public/images/samplepic.jpg'

const ProductDisplayList = ({ props }) => {
  return (
    <div className='product'>

      <img className='product-image' src={`/${Picture}`} />
      {
        props.name &&
				<>
				  <div className='product-name'>{props.name}</div>
				  <div className='product-description'>{props.brand}</div>
				  <div className='product-price'>${props.price}</div>
				</>
      }
    </div>
  )
}

export default ProductDisplayList
