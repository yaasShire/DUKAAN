import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const DecisionButton = ({ title }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default DecisionButton