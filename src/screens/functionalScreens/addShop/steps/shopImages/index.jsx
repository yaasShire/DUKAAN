import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ImageTaker from '../../../../../components/atoms/productImageTaker'
import CancelButton from '../../../../../components/atoms/canelButton'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import ShopImageTaker from '../../../../../components/molecules/shopImageTaker'
import { useDispatch, useSelector } from 'react-redux'
import AppLoader from '../../../../../components/molecules/AppLoader'
import { setShopData, setCoordinates, setImage1, setImage2, setImage3, setImage4, setImage5, setImage6, setLocationData, } from '../../../../../redux/shop'
const ShopImages = ({ setcurrentPosition, navigation }) => {
    const dispatch = useDispatch()
    const { shopImages } = useSelector(state => state.shopRegistration);
    const [isLoading, setIsLoading] = useState(false)
    const checkMainImage = () => {
        if (shopImages.url1) {
            return true
        }
        return false;
    }
    const clearShopDetails = () => {
        dispatch(setShopData({
            shopName: "",
            shopEmail: "",
            shopNumber: ""
        }))
        dispatch(setLocationData({
            country: "",
            state: "",
            city: "",
            region: "",
            nearestLANMark: ""
        }))
        dispatch(setImage1(""))
        dispatch(setImage2(""))
        dispatch(setImage3(""))
        dispatch(setImage4(""))
        dispatch(setImage5(""))
        dispatch(setImage6(""))
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <ShopImageTaker main={true} image={1} imageURL={shopImages?.url1} />
                <ShopImageTaker image={2} imageURL={shopImages?.url2} />
                <ShopImageTaker image={3} imageURL={shopImages?.url3} />
                <ShopImageTaker image={4} imageURL={shopImages?.url4} />
                <ShopImageTaker image={5} imageURL={shopImages?.url5} />
                <ShopImageTaker image={6} imageURL={shopImages?.url6} />
            </View>
            <View style={styles.buttonHolder}>
                <CancelButton disabled={false} label="Previous" setcurrentPosition={setcurrentPosition} />
                <AddShopButton clearShopDetails={clearShopDetails} setIsLoading={setIsLoading} checkMainImage={checkMainImage} label="Finish" navigation={navigation} />
            </View>
            {
                isLoading && (
                    <AppLoader />
                )
            }
        </View>
    )
}

export default ShopImages