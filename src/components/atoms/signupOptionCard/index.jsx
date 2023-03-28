import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const SignUpOptionCard = ({ image }) => {
    return (
        <TouchableOpacity style={styles.singUpCard}>
            <Image source={image} style={styles.signupOptionImage} />
        </TouchableOpacity>
    )
}

export default SignUpOptionCard