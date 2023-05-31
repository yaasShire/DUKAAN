import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
const AppErrorHandler = (error = "") => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{error}</Text>
        </View>
    )
}

export default AppErrorHandler