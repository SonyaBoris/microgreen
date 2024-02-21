import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeIndex: 0,
  value: 0,
  cart: [],
  quantity: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    activeItem: (state, action) => {
      state.activeIndex = action.payload.id
    },
    addItemToCart: (state, action) => {
      if (state.cart.find(({ id }) => id === action.payload.id)) {
        state.quantity += 1
      } else {
        state.cart.push({
          id: action.payload.id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
        })
      }


      state.value = state.cart.length

    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter(cart => cart.id !== action.payload.id)
      state.value = state.cart.length
    },

  },
})


export const { activeItem, increment, addItemToCart, removeItemFromCart } = counterSlice.actions

export default counterSlice.reducer