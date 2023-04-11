import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductActionButton = ({ setCurrentPosition = () => { }, productCategory, label, handleSubmit = () => { }, errors, errorHandler = () => { } }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder} onPress={() => {
            handleSubmit()
            errorHandler()
        }}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    )
}
export default AddProductActionButton