import { View, Text } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ImageTaker from '../../../../../components/atoms/productImageTaker'
import CancelButton from '../../../../../components/atoms/canelButton'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import ShopImageTaker from '../../../../../components/molecules/shopImageTaker'
import { useDispatch, useSelector } from 'react-redux'
import AppLoader from '../../../../../components/molecules/AppLoader'
import { setImage1 } from '../../../../../redux/shop'
const ShopImages = ({ setcurrentPosition, navigation }) => {
    const dispatch = useDispatch()
    // dispatch(setImage1(""))
    const { shopImages } = useSelector(state => state.shopRegistration);
    const [isLoading, setIsLoading] = useState(false)
    const checkMainImage = () => {
        if (shopImages.url1) {
            return true
        }
        return false;
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <ShopImageTaker main={true} image={1} />
                <ShopImageTaker image={2} />
                <ShopImageTaker image={3} />
                <ShopImageTaker image={4} />
                <ShopImageTaker image={5} />
                <ShopImageTaker image={6} />
            </View>
            <View style={styles.buttonHolder}>
                <CancelButton disabled={false} label="Previous" setcurrentPosition={setcurrentPosition} />
                <AddShopButton setIsLoading={setIsLoading} checkMainImage={checkMainImage} label="Finish" navigation={navigation} />
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