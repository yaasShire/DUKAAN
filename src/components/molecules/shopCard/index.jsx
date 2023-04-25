import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntiDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ShopCard = ({ shop, navigation }) => {
    const nameShortener = (name) => {
        return name.length > 20 ? name.slice(0, 20) : name
    }
    return (
        <TouchableWithoutFeedback onPress={() => navigation.navigate("shopProfile", { data: shop })}>
            <View style={styles.shopCard}>
                <View style={styles.imageWrapper}>
                    <Image source={shop.image} style={styles.image} />
                </View>
                <View style={styles.infoHolder}>
                    <Text style={styles.shopName}>{nameShortener(shop.name)}</Text>
                    <View style={styles.productsHolder}>
                        <View style={styles.iconProductHolder}>
                            <AntiDesign name='CodeSandbox' size={19} />
                            <Text style={styles.stockText}>{shop.numberOfProducts} products</Text>
                        </View>
                        <View style={styles.salesRankHolder}>
                            <Text style={styles.salesText}>Sales rank:</Text>
                            <Text style={styles.salesQuantity}>200</Text>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default ShopCard