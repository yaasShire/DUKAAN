import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import styles from './style'
import notFoundImage from '../../../assets/images/notFound.png'
const NoOrderFound = () => {
    return (
        <View style={[styles.container, StyleSheet.absoluteFillObject]}>
            <Image source={notFoundImage} style={styles.image} />
            <Text>No order found</Text>
        </View>
    )
}

export default NoOrderFound