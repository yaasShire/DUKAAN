import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddShopButton = ({ label, handleSubmit, setcurrentPosition, navigation }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder} onPress={() => {
            handleSubmit && handleSubmit()
            navigation && navigation.navigate("bottomTabs")
        }}>
            <View style={styles.buttonView}>
                <Text style={styles.text}>{label}</Text>
            </View>
        </TouchableOpacity>
    )
}
export default AddShopButton