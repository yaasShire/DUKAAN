import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AuthButton = ({ title, handleSubmit = () => { }, errors, navigation, destination = "", isLoading, bgColor = "", cWidth = 100, cHeight = 0 }) => {
    return (
        <TouchableOpacity style={[styles.actionButton(bgColor, cWidth, cHeight), { opacity: isLoading ? .3 : 1 }]} disabled={isLoading} onPress={() => {
            handleSubmit()
            navigation && navigation.replace(destination)
        }}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default AuthButton