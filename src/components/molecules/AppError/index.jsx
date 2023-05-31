import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
const AppError = (error) => {
    return (
        <View style={styles.container}>
            <Text>{error && error}</Text>
        </View>
    )
}

export default AppError