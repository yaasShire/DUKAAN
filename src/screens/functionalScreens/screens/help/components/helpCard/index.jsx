import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './style'

const HelpCard = ({ image, title, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Image source={image} style={styles.image} />
            <Text>{title}</Text>
        </Pressable>
    )
}

export default HelpCard