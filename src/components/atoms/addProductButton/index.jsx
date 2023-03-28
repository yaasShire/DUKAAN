import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductButton = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate("addProduct")}>
            <Text style={styles.addText}>ADD</Text>
        </TouchableOpacity>
    )
}

export default AddProductButton