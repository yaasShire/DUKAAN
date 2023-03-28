import { configureStore } from '@reduxjs/toolkit'
import products from './products'
import productImages from './productImages'
export const store = configureStore({
    reducer: {
        productRegistration: products,
        product_Images: productImages,
    },
})
