import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  cart: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    addItemToCart: (state) => {
      state.value += 1
    },
    removeItemFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(({ id }) => id !== payload)
    },

  },
})


export const { increment, addItemToCart,removeItemFromCart } = counterSlice.actions

export default counterSlice.reducer