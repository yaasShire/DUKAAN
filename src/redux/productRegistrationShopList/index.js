import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    quantity: "",
    price: "",
    sellerSKU: ""
}


export const productOffers = createSlice({
    name: 'product_offers',
    initialState,
    reducers: {
        setProductOffers: (state, action) => {
            state.price = action.payload.price,
                state.quantity = action.payload.quantity,
                state.sellerSKU = action.payload.sellerSKU
        }

    },
})

// Action creators are generated for each case reducer function
export const { setProductOffers } = productOffers.actions

export default productOffers.reducer