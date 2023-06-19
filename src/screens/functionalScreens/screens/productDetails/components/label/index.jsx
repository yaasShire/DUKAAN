import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
const Label = ({ label }) => {
    return (
        <View style={styles.labelWrapper}>
            <Text style={styles.sectionLabel}>{label}</Text>
        </View>
    )
}

export default Label