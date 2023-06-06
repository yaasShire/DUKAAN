import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
const ProductInformationRow = ({ text, value = "" }) => {
    return (
        <View style={styles.rowContent}>
            <View style={styles.dotTextValueWrapper}>
                <View style={styles.dot} />
                <Text style={styles.textTitle}>{text}</Text>
            </View>
            <Text style={styles.valueText}>{value}</Text>
        </View>
    )
}

export default ProductInformationRow