import axios from 'axios'

// ACTION TYPES
const SET_PRODUCT = 'SET_PRODUCT'
const RESET_PRODUCT = 'RESET_PRODUCT'

// INITIAL STATE
const initialState = {}

// ACTION CREATORS
const setProduct = product => ({
  type: SET_PRODUCT,
  product
})

export const resetProduct = () => ({
  type: RESET_PRODUCT
})

// THUNK CREATORS
export const fetchProductData = productId => async dispatch => {
  try {
    // does this path work?
    const { data } = await axios.get(`https://dev.lillypulitzer.com/s/lillypulitzer-us/dw/shop/v18_3/products/${productId}?q=&count=18&start=0&refine_1=cgid%3Djust-in&client_id=7469c353-e112-4902-bf40-ead35df41219`)
    dispatch(setProduct(data))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return action.product
    case RESET_PRODUCT:
      return {}
    default:
      return state
  }
}

export default reducer
