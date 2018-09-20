import React from 'react'
import {connect} from 'react-redux'
import { retrieveProducts } from '../store/products'
import ProductCard from './product-card'

class Products extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.loadProducts()
  }

  render() {
    const products = this.props.products
    return (
      <div>
        <h2>Our Products:</h2>
        <div className="products-container" >
          {
            products.map(product => (
              <ProductCard product={product} key={product.product_id}/>
            ))
          }
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products
})

const mapDispatch = dispatch => ({
  loadProducts: () => dispatch(retrieveProducts())
})

export default connect(mapState, mapDispatch)(Products)
