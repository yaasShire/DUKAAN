import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
const SendOTPButton = ({ setShowOTPModal = () => { } }) => {
    return (
        <Pressable onPress={() => setShowOTPModal(prev => !prev)} style={styles.button}>
            <Text style={styles.btnText}>Send OTP</Text>
        </Pressable>
    )
}

export default SendOTPButton