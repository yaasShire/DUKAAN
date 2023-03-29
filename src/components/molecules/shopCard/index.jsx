import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ShopCard = ({ shop }) => {
    // const nameShortener = (name)=>(
    //     return name.length>10
    // )
    return (
        <View style={styles.shopCard}>
            <Image source={shop.image} style={styles.image} />
            <View style={styles.infoHolder}>
                <Text style={styles.shopName}>{shop.name}</Text>
                <View style={styles.productsHolder}>
                    <AntiDesign name='CodeSandbox' size={19} />
                    <Text style={styles.stockText}>{shop.numberOfProducts} products</Text>
                </View>
            </View>
            <MaterialCommunityIcons name='dots-vertical' size={30} style={styles.dotIcon} />
        </View>
    )
}

export default ShopCard