import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AcceptButton = ({ title, navigation, order }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("viewOrder", { order })}>
            <Text style={styles.acceptText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AcceptButton