import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
const ProductRegistrationError = ({ label = "" }) => {
    return (
        <View style={styles.errorHolder}>
            <Text style={styles.textError}>{label}</Text>
        </View>
    )
}

export default ProductRegistrationError