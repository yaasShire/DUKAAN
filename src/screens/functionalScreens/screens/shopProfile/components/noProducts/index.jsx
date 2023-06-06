import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import NoProduct from '../../../../../../assets/images/noShops.png'
import { TouchableOpacity } from 'react-native'
const NoProductForProfile = ({ navigation }) => {
    return (
        <View style={styles.noProductsWrapper}>
            <Image source={NoProduct} style={styles.noProductImage} />
            <Text>No product(s)</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigation.navigate('productsStack', { screen: "addproduct" })
            }}>
                <Text style={styles.buttonText}>Add Product</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NoProductForProfile