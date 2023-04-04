import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import ImageTaker from '../../../../../components/atoms/productImageTaker'
const ShopImages = () => {
    return (
        <View style={styles.container}>
            <ImageTaker />
        </View>
    )
}

export default ShopImages