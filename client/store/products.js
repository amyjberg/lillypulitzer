import axios from 'axios'

// ACTION TYPES

const GET_PRODUCTS = 'GET_PRODUCTS'

// INITIAL STATE
const initialState = []

// ACTION CREATORS

const getProducts = products => ({
  type: GET_PRODUCTS,
  products
})

// THUNK CREATORS

export const retrieveProducts = () => async dispatch => {
  try {
    // make axios request for product data
    const { data } = await axios.get('https://dev.lillypulitzer.com/s/lillypulitzer-us/dw/shop/v18_3/product_search?expand=availability,images,prices,variations&count=18&refine_1=cgid=just-in&q=&start=0&client_id=7469c353-e112-4902-bf40-ead35df41219')
    dispatch(getProducts(data.hits))
  } catch (err) {
    console.error(err)
  }
}

// REDUCER

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return action.products
    default:
      return state
  }
}

export default reducer
