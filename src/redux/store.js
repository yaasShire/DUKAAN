import { configureStore } from '@reduxjs/toolkit'
import products from './products'
import productImages from './productImages'
import requiredProductInformation from './requiredProductInformation'
import productOffers from './productOffers'
import ShopSlice from './shop'
import productsFilter from './productsFilter'
export const store = configureStore({
    reducer: {
        productRegistration: products,
        product_Images: productImages,
        offers: productOffers,
        shopRegistration: ShopSlice,
        productInDetails: requiredProductInformation,
        productsFilter: productsFilter,
    },
})
