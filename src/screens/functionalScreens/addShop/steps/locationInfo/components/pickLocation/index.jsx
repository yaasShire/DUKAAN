import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import { Entypo } from '@expo/vector-icons'
const PickLocation = ({ setShowMap, navigation, coordinate }) => {
    return (
        <Pressable style={styles.container} onPress={() => navigation.navigate("map", { location: coordinate })}>
            <Entypo name='location' color={"red"} size={24} />
            <Text style={styles.pickText}>PickLocation</Text>
        </Pressable>
    )
}

export default PickLocation