import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductActionButton = ({ setCurrentPosition = () => { }, navigation, label, action, handleSubmit = () => { }, errors, errorHandler = () => { }, uploadProduct }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder(action)} onPress={() => {
            handleSubmit()
            errorHandler(action)
            action == 'Prev' && setCurrentPosition(prev => prev - 1)
            // navigation && navigation.navigate("productList")
            label == 'Finish' && uploadProduct()
        }}>
            <Text style={styles.buttonText(action)}>{label}</Text>
        </TouchableOpacity>
    )
}
export default AddProductActionButton