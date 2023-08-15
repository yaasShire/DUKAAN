import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { globalStyles } from '../../../../../globalConstants/styles'

const InitialButton = ({ label = "", bgColor = globalStyles.colors.logoColor, color = "", onPress = () => { } }) => {
    return (
        <Pressable style={styles.button(bgColor)} onPress={onPress}>
            <Text style={styles.text(color)}>{label}</Text>
        </Pressable>
    )
}
export default InitialButton

const styles = StyleSheet.create({
    button: (bgColor) => ({
        backgroundColor: bgColor,
        width: "100%",
        height: 70,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    }),
    text: (color) => ({
        fontSize: 20,
        fontWeight: globalStyles.fontWeights.primary,
        color: color
    })
})