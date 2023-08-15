import { View, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../../../../../../globalConstants/styles'

const AddRecordButton = ({ onPress = () => { } }) => {
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.btnText}>Add</Text>
        </TouchableOpacity>
    )
}

export default AddRecordButton

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "flex-end",
    },
    btn: {
        height: 45,
        width: 80,
        backgroundColor: globalStyles.colors.logoColor,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    btnText: {
        fontSize: 15,
        fontWeight: "400",
        color: globalStyles.colors.miniPrimary
    }
})