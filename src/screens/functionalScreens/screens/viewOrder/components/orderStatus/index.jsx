import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
const OrderStatus = ({ status = "" }) => {
    return (
        <View style={styles.acceptedTextWrapper}>
            <Text style={styles.statusText}>Status :</Text>
            <Text style={styles.acceptedText}>{status}</Text>
        </View>
    )
}

export default OrderStatus