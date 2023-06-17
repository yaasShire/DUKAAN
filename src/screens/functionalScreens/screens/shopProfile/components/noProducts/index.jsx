import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import NoProduct from '../../../../../../assets/images/notFound.png'
import { TouchableOpacity } from 'react-native'
const NoProductForShopProfile = ({ navigation }) => {
    return (
        <View style={styles.noProductsWrapper}>
            <Image source={NoProduct} style={styles.noProductImage} />
            <Text>No product(s)</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('productsStack', { screen: "addProduct" })
            }}>
                <Text style={styles.buttonText}>Add Product</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NoProductForShopProfile