import React from 'react'
import {connect} from 'react-redux'
import { retrieveProducts } from '../store/products'
import { fetchProductData } from '../store/selected-product'
import ProductCard from './product-card'
// import SelectedProductCard from './selected-product-card'
import SelectedProduct from './selected-product'

class Products extends React.Component {
  constructor() {
    super()
    this.selectProduct = this.selectProduct.bind(this)
  }

  componentDidMount() {
    this.props.loadProducts()
  }

  selectProduct(productId) {
    this.props.selectProduct(productId)
  }

  render() {
    const { products, selectedProduct } = this.props
    const productSelected = Object.keys(selectedProduct).length !== 0
    return (
      <div>
        <h2>Our Products:</h2>
          {
            productSelected ? <SelectedProduct /> : null
          }
        <div className="products-container" >
          {
            products.map(product => {
              return product.product_id === selectedProduct.id ?
                null
                :
                <ProductCard product={product} key={product.product_id} selectProduct={this.selectProduct}/>
            })
          }
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  products: state.products,
  selectedProduct: state.selectedProduct
})

const mapDispatch = dispatch => ({
  loadProducts: () => dispatch(retrieveProducts()),
  selectProduct: id => dispatch(fetchProductData(id))
})

export default connect(mapState, mapDispatch)(Products)
