import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductActionButton = ({ setCurrentPosition = () => { }, navigation, productCategory, label, action, handleSubmit = () => { }, errors, errorHandler = () => { } }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder(action)} onPress={() => {
            handleSubmit()
            errorHandler(action)
            navigation && navigation.navigate("productList")
        }}>
            <Text style={styles.buttonText(action)}>{label}</Text>
        </TouchableOpacity>
    )
}
export default AddProductActionButton