import React from 'react'
import {connect} from 'react-redux'
import { retrieveProducts } from '../store/products'

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
        <h2>Did we get the products?</h2>
        <h2>{`products length: ${products.length}`}</h2>
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
