import React from 'react'
import {connect} from 'react-redux'
import { resetProduct } from '../store/selected-product'

class SelectedProduct extends React.Component {
  constructor() {
    super()
  }

  render() {
    const {selectedProduct, resetProduct, products} = this.props
    // note: selectedProduct doesn't have access to all info, so need to filter products
    const moreProductData = products.find(product => product.product_id === selectedProduct.id)
    return (
      <div className="selected-product">
        <img src={moreProductData.image.link}/>
        <h1>{selectedProduct.name.toUpperCase()}</h1>
        <h3>{selectedProduct.long_description}</h3>
        <h3>${moreProductData.price}</h3>
        <button onClick={resetProduct}>Back to browsing</button>
      </div>
    )
  }
}

const mapState = state => ({
  selectedProduct: state.selectedProduct,
  products: state.products
})
const mapDispatch = dispatch => ({
  resetProduct: () => dispatch(resetProduct())
})

export default connect(mapState, mapDispatch)(SelectedProduct)
