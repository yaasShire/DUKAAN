import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import NoShopsImage from '../../../../../../assets/images/notFound.png'
import styles from './style'

const NoProduct = ({ navigation, screen = "", title = "" }) => {
    return (
        <View style={[styles.container,]}>
            <Image source={NoShopsImage} style={styles.image} />
            <View style={styles.textButtonWrapper}>
                <Text style={styles.descriptinText}>{title}</Text>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate(screen)
                }}>
                    <Text style={styles.buttonText}>ADD</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoProduct