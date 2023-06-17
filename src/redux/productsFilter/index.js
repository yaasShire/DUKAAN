import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    mainCategoryFilter: {},
    subCategoryFilter: {},
    productCategoryFilter: {},
    shopFilter: {},
}
export const productsFilter = createSlice({
    name: 'products_filter',
    initialState,
    reducers: {
        setMainCategoryFilter: (state, action) => {
            state.mainCategoryFilter = action.payload
        },
        setSubCategoryFilter: (state, action) => {
            state.subCategoryFilter = action.payload
        },
        setProductCategoryFilter: (state, action) => {
            state.productCategoryFilter = action.payload
        },
        setShopFilter: (state, action) => {
            state.shopFilter = action.payload
        }
    },
})

export const { setMainCategoryFilter, setProductCategoryFilter, setShopFilter, setSubCategoryFilter } = productsFilter.actions

export default productsFilter.reducer