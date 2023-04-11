import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const CancelButton = ({ label, handleSubmit, setcurrentPosition, disabled }) => {
    return (
        <TouchableOpacity style={styles.buttonHolder} disabled={disabled} onPress={() => {
            setcurrentPosition(prev => prev - 1)
        }}>
            {
                disabled == false && (
                    <View style={styles.buttonView}>
                        <Text style={styles.text}>{label}</Text>
                    </View>
                )

            }
        </TouchableOpacity>
    )
}
export default CancelButton