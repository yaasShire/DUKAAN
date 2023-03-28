import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductActionButton = () => {
    return (
        <TouchableOpacity style={styles.buttonHolder}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    )
}

export default AddProductActionButton