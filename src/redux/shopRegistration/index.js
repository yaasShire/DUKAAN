import { createSlice } from '@reduxjs/toolkit'
const initialState = {
   shopData:{
    name:"",
    phone_number:"",
    email:"",
    state:1,
    region:"",
    landmark:"",
    latitude:"",
    longitude
   }
}


export const productOffers = createSlice({
    name: 'shop_registration',
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