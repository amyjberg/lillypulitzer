import React from 'react'

const ProductCard = props => {
  const product = props.product
  return (
    <div key={product.product_id}>
      <img src={product.image.link}/>
      <h4>${product.price}</h4>
    </div>
  )
}

export default ProductCard
