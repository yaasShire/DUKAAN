import { View, Text, TouchableHighlight } from 'react-native'
import React from 'react'
import styles from './style'
import { Feather } from '@expo/vector-icons'
const SwipeActionButton = ({ icon = "", onPress = () => { }, bgColor = "" }) => {
    return (
        <TouchableHighlight onPress={onPress} style={styles.container(bgColor)}>
            <Feather name={icon} size={26} />
        </TouchableHighlight>

    )
}

export default SwipeActionButton