import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    productName: "",
    productId: "",
    productBrand: "year-of-make"

}


export const requiredProductInformation = createSlice({
    name: 'required_product-information',
    initialState,
    reducers: {
    },
})

// Action creators are generated for each case reducer function
export const { setMainCategory, setProductCategory, setSubCategory } = requiredProductInformation.actions

export default requiredProductInformation.reducer