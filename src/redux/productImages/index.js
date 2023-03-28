import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  mainImage: { url: "" },
  image2: { url: "" },
  image3: { url: "" },
  image4: { url: "" },
  image5: { url: "" },
  image6: { url: "" }
}


export const productImages = createSlice({
  name: 'product_images',
  initialState,
  reducers: {
    setMainImage: (state, action) => {
      state.mainImage = { url: action.payload }
      console.log(action.payload)
    },
    setImage2: (state, action) => {
      state.image2 = { url: action.payload }
      console.log(action.payload)
    },
    setImage3: (state, action) => {
      state.image3 = { url: action.payload }
      console.log(action.payload)
    },
    setImage4: (state, action) => {
      state.image4 = { url: action.payload }
      console.log(action.payload)
    },
    setImage5: (state, action) => {
      state.image5 = { url: action.payload }
      console.log(action.payload)
    },
    setImage6: (state, action) => {
      state.image6 = { url: action.payload }
      console.log(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMainImage, setImage2, setImage3, setImage4, setImage5, setImage6 } = productImages.actions

export default productImages.reducer