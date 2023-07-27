import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo } from '@expo/vector-icons'
import { nameShortner } from '../../../../../../../utils/utilityFunctions'
const PickLocation = ({ setShowMap, navigation, coordinates = {}, label = "Pick Location" }) => {
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("map", { location: coordinates })}>
            <Entypo name='location' color={"red"} size={24} />
            <Text style={styles.pickText}>{nameShortner(label, 29)}</Text>
        </Pressable>
    )
}

export default PickLocation