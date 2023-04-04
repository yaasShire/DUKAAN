import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddShopButton = ({ label, handleSubmit, setcurrentPosition }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder} onPress={() => {
            handleSubmit && handleSubmit()
        }}>
            <View style={styles.buttonView}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default AddShopButton