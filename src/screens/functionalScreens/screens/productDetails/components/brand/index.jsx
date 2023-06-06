import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Image } from 'react-native'
const BrandCard = ({ item }) => {
    return (
        <View style={styles.brandWholeWrapper}>
            <View style={styles.brandWrapper}>
                <Image source={{ uri: "https://sweyn.co.uk/storage/images/brands/" + item?.logo }} style={styles.brandImage} />
            </View>
            <Text style={styles.brandName}>{item?.name}</Text>
        </View>
    )
}

export default BrandCard