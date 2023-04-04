import { configureStore } from '@reduxjs/toolkit'
import products from './products'
import productImages from './productImages'
import requiredProductInformation from './requiredProductInformation'
import productOffers from './productOffers'
export const store = configureStore({
    reducer: {
        productRegistration: products,
        product_Images: productImages,
        offers: productOffers,
        productInDetails: requiredProductInformation,
    },
})
