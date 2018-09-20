import React from 'react'
import ProductCard from './product-card'
import axios from 'axios'

class SelectedProductCard extends React.Component {
  constructor() {
    super()
    this.state = {
      description: ''
    }
  }

  async componentDidMount() {
    const {data} = await axios.get(this.props.product.link)
    this.setState({
      description: data.short_description
    })
  }

  render() {
    const {product, resetProduct, selectProduct} = this.props
    if (this.state.description === '') {
      // to prevent screen flashing
      return <ProductCard product={product} selectProduct={selectProduct}/>
    }
    return (
      <div className="product-card selected" onClick={() => resetProduct()}>
        <img src={product.image.link}/>
        <h4 className="product-title">{product.product_name.toUpperCase()}</h4>
        <h4 className="product-price">${product.price}</h4>
        <h5>{this.state.description}</h5>
      </div>
    )
  }
}

export default SelectedProductCard
