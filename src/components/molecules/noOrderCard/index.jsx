import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import noOrderImage from '../../../assets/noOrder1.png'
const NoOrderCard = () => {
    return (
        <View style={styles.container}>
            <Image source={noOrderImage} style={styles.image} />
            <Text style={styles.text1}>Ooops!</Text>
            <Text style={styles.text2}>No orders found</Text>
        </View>
    )
}

export default NoOrderCard