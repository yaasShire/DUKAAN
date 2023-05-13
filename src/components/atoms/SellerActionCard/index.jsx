import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
const SellerCardAction = ({ icon, actionName, Directory, navigation }) => {
    return (
        <TouchableOpacity style={[styles.actionCard]} onPress={() => actionName == 'Products' ? navigation.navigate('productsStack', { screen: "productList" }) : actionName == 'Profile' ? navigation.navigate('settingScreens', { screen: "settings" }) : actionName == 'Shop' ? navigation.navigate('shops') : actionName == 'Reports' ? navigation.navigate('reports') : ""}>
            <Ionicons name={icon} color="#1BB4D6" size={60} />
            <Text style={styles.actionName}>{actionName}</Text>

        </TouchableOpacity>
    )
}

export default SellerCardAction