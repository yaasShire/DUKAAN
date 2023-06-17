import { View, Text, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import { Feather } from '@expo/vector-icons'
const TitleHeader = ({ isNoProducts, navigation }) => {
    return (
        <View style={styles.header}>
            <Text style={styles.titleText}>Products</Text>
            {
                !isNoProducts && (
                    <Pressable style={styles.seeMoreWrapper} onPress={() => {
                        navigation.navigate('shopProducts')
                    }}>
                        <Text style={styles.seeMoreText}>See more</Text>
                        <Feather name='chevron-right' size={24} color={"gray"} />
                    </Pressable>
                )
            }
        </View>
    )
}

export default TitleHeader