import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NoShopsImage from '../../../../../assets/images/notFound.png'
import styles from './style'

const NoShopFound = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={NoShopsImage} style={styles.image} />
            <View style={styles.textButtonWrapper}>
                <Text style={styles.descriptinText}>No shops Found, add shop</Text>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate("addShop")
                }}>
                    <Text style={styles.buttonText}>Add Shop</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoShopFound