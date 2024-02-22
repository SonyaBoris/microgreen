import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeIndex: 0,
  value: 0,
  cart: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    activeItem: (state, action) => {
      state.activeIndex = action.payload.id
    },
    addItemToCart: (state, action) => {
      if (state.cart.find(({ id }) => id === action.payload.id)) {
        state.cart = state.cart.map((item) => {
          return item.id === action.payload.id ? { ...item, quantity: action.payload.quantity || item.quantity + 1 } : item
        })
      } else {
        state.cart.push({ ...action.payload, quantity: 1 })
      }
      state.value = state.cart.length
    },
    removeItemFromCart: (state, action) => {
      state.cart = state.cart.filter(cart => cart.id !== action.payload.id)
      state.value = state.cart.length
    },
  },
})


export const { activeItem, addItemToCart, removeItemFromCart } = counterSlice.actions

export default counterSlice.reducer