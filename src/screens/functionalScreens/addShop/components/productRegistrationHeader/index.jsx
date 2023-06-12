import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
const ProductRegistrationHeader = ({ title }) => {
    return (
        <View style={styles.titleHolder}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
    )
}

export default ProductRegistrationHeader