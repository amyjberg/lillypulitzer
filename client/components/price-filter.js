import React from 'react'
import {connect} from 'react-redux'
import {searchProductsByPrice} from '../store/products'

class PriceFilter extends React.Component {
  constructor() {
    super()
    this.state = {
      bottom: '',
      top: ''
    }
    this.limitPriceRange = this.limitPriceRange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  limitPriceRange() {
    const {bottom, top} = this.state

    if (bottom !== null && top !== null) {
      this.props.searchByPrice(bottom, top)
    }
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    console.log('handling sumibt')
    console.log('these are our values:', this.state.bottom, this.state.top)
    evt.preventDefault()
    this.limitPriceRange()
  }

  render () {
    const {bottom, top} = this.state
    return (
      <div>
        <h4>Price Range:</h4>
        <label>From: </label>
        <input type="number" value={this.state.bottom} name="bottom" onChange={this.handleChange}/>
        <label>To:</label>
        <input type="number" value={this.state.top} name="top" onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleSubmit}>Go</button>
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  searchByPrice: (bottom, top) => dispatch(searchProductsByPrice(bottom, top))
})

export default connect(null, mapDispatch)(PriceFilter)
