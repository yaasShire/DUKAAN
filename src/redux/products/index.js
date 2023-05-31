import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  mainCategory: {},
  subCategory: {},
  productCategory: {},
  shopsList: {},
  images: {
    url1: "",
    url2: "",
    url3: "",
    url4: "",
    url5: "",
    url6: ""
  },
  productRequiredInfo: {
    productName: "",
    productBrand: "",
    yearOfMake: ""
  },
  productOffers: {
    quantity: "",
    price: "",
    description: ""
  },
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
    },
    setShopsList: (state, action) => {
      state.shopsList = action.payload
    },
    setProductImage1: (state, action) => {
      state.images.url1 = action.payload
    },
    setProductImage2: (state, action) => {
      state.images.url2 = action.payload
    },
    setProductImage3: (state, action) => {
      state.images.url3 = action.payload
    },
    setProductImage4: (state, action) => {
      state.images.url4 = action.payload
    },


    fillRequiredProductInformation: (state, action) => {
      state.productRequiredInfo.productName = action.payload.productName,
        state.productRequiredInfo.productBrand = action.payload.productBrand,
        state.productRequiredInfo.yearOfMake = action.payload.yearOfMake
    },
    setProductOffers: (state, action) => {
      state.productOffers.price = action.payload.price,
        state.productOffers.quantity = action.payload.quantity,
        state.productOffers.description = action.payload.description
    }

  },
})

// Action creators are generated for each case reducer function
export const { setMainCategory, setProductCategory, setSubCategory, setShopsList, setProductImage1, setProductImage2, setProductImage3, setProductImage4, setProductOffers, fillRequiredProductInformation, } = products.actions

export default products.reducer