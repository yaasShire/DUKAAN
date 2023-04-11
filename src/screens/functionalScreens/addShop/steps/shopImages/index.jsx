import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import ImageTaker from '../../../../../components/atoms/productImageTaker'
import CancelButton from '../../../../../components/atoms/canelButton'
import AddShopButton from '../../../../../components/atoms/addShopButton'
import ShopImageTaker from '../../../../../components/molecules/shopImageTaker'
const ShopImages = ({ setcurrentPosition, navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageWrapper}>
                <ShopImageTaker main={true} />
                <ShopImageTaker />
                <ShopImageTaker />
                <ShopImageTaker />
                <ShopImageTaker />
                <ShopImageTaker />
            </View>
            <View style={styles.buttonHolder}>
                <CancelButton disabled={true} label="Previous" setcurrentPosition={setcurrentPosition} />
                <AddShopButton label="Next" setcurrentPosition={setcurrentPosition} navigation={navigation} />
            </View>
        </View>
    )
}

export default ShopImages