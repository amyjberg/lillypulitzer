import React from 'react'

const ProductCard = props => {
  const product = props.product
  return (
    <div className="product-card">
      <img src={product.image.link}/>
      <h4 className="product-title">{product.product_name.toUpperCase()}</h4>
      <h4 className="product-price">${product.price}</h4>
    </div>
  )
}

export default ProductCard
