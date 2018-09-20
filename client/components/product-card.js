import React from 'react'

const ProductCard = ({product, selectProduct}) => {
  return (
    <div className="product-card" onClick={() => selectProduct(product.product_id)}>
      <img src={product.image.link}/>
      <h4 className="product-title">{product.product_name.toUpperCase()}</h4>
      <h4 className="product-price">${product.price}</h4>
    </div>
  )
}

export default ProductCard
