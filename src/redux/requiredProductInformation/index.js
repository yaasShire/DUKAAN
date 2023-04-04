import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    productName: "",
    productBrand: "",
    yearOfMake: ""
}


export const requiredProductInformation = createSlice({
    name: 'required_product-information',
    initialState,
    reducers: {
        fillRequiredProductInformation: (state, action) => {
            state.productName = action.payload.productName,
                state.productBrand = action.payload.productBrand,
                state.yearOfMake = action.payload.yearOfMake
        }
    },
})

export const { fillRequiredProductInformation } = requiredProductInformation.actions
export default requiredProductInformation.reducer