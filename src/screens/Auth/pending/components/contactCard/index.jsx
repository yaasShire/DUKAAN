import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { globalStyles } from '../../../../../globalConstants/styles'
import { FontAwesome } from '@expo/vector-icons'


const ContactCard = ({ icon = "", title = "", onPress = () => { } }) => {
    return (
        <View style={styles.wrapper}>
            <Pressable style={styles.container} onPress={onPress}>
                <FontAwesome name={icon} size={35} color={globalStyles.colors.miniPrimary} />
            </Pressable>
            <Text style={styles.description}>{title}</Text>
        </View>
    )
}

export default ContactCard


const styles = StyleSheet.create({
    wrapper: {
        justifyContent: "center",
        alignItems: 'center',
        rowGap: 10
    },
    container: {
        backgroundColor: globalStyles.colors.logoColor,
        height: 70,
        width: 70,
        borderRadius: 35,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: globalStyles.colors.logoColor
    },
    description: {
        color: globalStyles.colors.miniPrimary,
        opacity: .7
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: "contain"
    }
})