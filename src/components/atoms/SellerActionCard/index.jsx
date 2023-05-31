import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
const SellerCardAction = ({ icon, actionName, Directory, navigation, image }) => {
    return (
        <TouchableOpacity style={[styles.actionCard]} onPress={() => actionName == 'Product' ? navigation.navigate('productsStack', { screen: "productList" }) : actionName == 'Profile' ? navigation.navigate('settingScreens', { screen: "settings" }) : actionName == 'Shop' ? navigation.navigate('shops') : actionName == 'Report' ? navigation.navigate('reports') : ""}>
            <Image source={image} style={styles.image} />
            <Text style={styles.actionName}>{actionName}</Text>

        </TouchableOpacity>
    )
}

export default SellerCardAction