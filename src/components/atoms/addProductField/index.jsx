import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductField = ({ label }) => {
    return (
        <View style={styles.fieldContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} />
        </View>
    )
}

export default AddProductField