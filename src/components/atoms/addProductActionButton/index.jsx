import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductActionButton = ({ setCurrentPosition, productCategory }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder} onPress={() => setCurrentPosition(prev => prev + 1)}>
            <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
    )
}

export default AddProductActionButton