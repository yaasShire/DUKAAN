import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import NoShopsImage from '../../../../../../assets/images/notFound.png'
import styles from './style'

const NoProduct = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={NoShopsImage} style={styles.image} />
            <View style={styles.textButtonWrapper}>
                <Text style={styles.descriptinText}>No products Found add product.</Text>
                <TouchableOpacity style={styles.button} onPress={() => {
                    navigation.navigate("addProduct")
                }}>
                    <Text style={styles.buttonText}>Add Product</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default NoProduct