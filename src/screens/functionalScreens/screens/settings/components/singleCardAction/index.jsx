import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'
import styles from './style'
const SingleCardAction = ({ name = "", icon = "", color = "", screen = "", navigation, showModal = () => { } }) => {
    return (
        <TouchableOpacity style={styles.singleAction} onPress={() => {
            showModal()
            screen && navigation.navigate(screen)

        }}>
            <View style={styles.nameIconWrapper}>
                <MaterialCommunityIcons name={icon} size={27} color={color} />
                <Text style={styles.actionName}>{name}</Text>
            </View>
            <Feather name='chevron-right' size={25} color="gray" />
        </TouchableOpacity >
    )
}

export default SingleCardAction