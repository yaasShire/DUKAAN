import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const OrderActionButton = ({ title, navigation, order, assign, refRBSheet }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => {
            assign ? navigation.navigate("courier", { order }) : navigation.navigate("viewOrder", { order })
        }}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}
export default OrderActionButton