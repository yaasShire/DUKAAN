import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductActionButton = ({ setCurrentPosition = () => { }, navigation, label, action, handleSubmit = () => { }, errors, errorHandler = () => { }, uploadProduct, clearProductRegistrationState = () => { } }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder(action)} onPress={() => {
            handleSubmit()
            errorHandler(action)
            action == 'Prev' && setCurrentPosition(prev => prev - 1)
            label == 'Finish' && uploadProduct()
            clearProductRegistrationState()

        }}>
            <Text style={styles.buttonText(action)}>{label}</Text>
        </TouchableOpacity>
    )
}
export default AddProductActionButton