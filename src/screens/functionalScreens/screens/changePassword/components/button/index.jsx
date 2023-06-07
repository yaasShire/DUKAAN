import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import styles from './style'
const ResetButton = ({ handleSubmit = () => { }, title, bgColor = "#000", navigation = () => { } }) => {
    return (
        <TouchableOpacity style={styles.button(bgColor)} onPress={() => {
            handleSubmit()
            title == 'Cancel' && navigation.goBack()
        }}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ResetButton