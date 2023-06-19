import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    products: []
}
export const fetchedProducts = createSlice({
    name: 'fetchedProducts',
    initialState,
    reducers: {
        setFetchedProducts: (state, action) => {
            state.products = action.payload
        }
    },
})

export const { setFetchedProducts } = fetchedProducts.actions

export default fetchedProducts.reducer