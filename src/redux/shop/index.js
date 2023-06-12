import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    personalData: {},
    shopData: {},
    locationData: {},
    coordinates: {
        latitude: 0,
        longitude: 0
    },
    shopImages: {
        url1: "",
        url2: "",
        url3: "",
        url4: "",
        url5: "",
        url6: "",

    }
}


export const ShopSlice = createSlice({
    name: 'shopSlice',
    initialState,
    reducers: {
        setPersonalData: (state, action) => {
            state.personalData = action.payload
        },
        setShopData: (state, action) => {
            state.shopData = action.payload
        },
        setLocationData: (state, action) => {
            state.locationData = action.payload
        },
        setShopImages: (state, action) => {
            state.shopImages = action.payload
        },
        setImage1: (state, action) => {
            state.shopImages.url1 = action.payload
        },
        setImage2: (state, action) => {
            state.shopImages.url2 = action.payload
        },
        setImage3: (state, action) => {
            state.shopImages.url3 = action.payload
        },
        setImage4: (state, action) => {
            state.shopImages.url4 = action.payload
        },
        setImage5: (state, action) => {
            state.shopImages.url5 = action.payload
        },
        setImage6: (state, action) => {
            state.shopImages.url6 = action.payload
        },
        setCoordinates: (state, action) => {
            state.coordinates = action.payload
        }

    },
})

// Action creators are generated for each case reducer function
export const { setLocationData, setPersonalData, setShopData, setShopImages, setImage1, setImage2, setImage3, setImage4, setImage5, setImage6, setCoordinates } = ShopSlice.actions

export default ShopSlice.reducer