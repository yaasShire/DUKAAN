import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  mainCategory: {},
  subCategory: {},
  productCategory: {}
}


export const products = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setMainCategory: (state, action) => {
      state.mainCategory = action.payload
      console.log(action.payload)
    },
    setSubCategory: (state, action) => {
      state.subCategory = action.payload
      console.log(action.payload)
    },
    setProductCategory: (state, action) => {
      state.productCategory = action.payload
      console.log(action.payload)
    }

  },
})

// Action creators are generated for each case reducer function
export const { setMainCategory, setProductCategory, setSubCategory } = products.actions

export default products.reducer