import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import { globalStyles } from '../../../globalConstants/styles'
const OrderActionButton = ({ title, navigation, order, assign, bgColor = globalStyles.colors.logoColor, onPress = () => { } }) => {
    return (
        <TouchableOpacity style={styles.button(bgColor)} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default OrderActionButton