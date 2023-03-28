import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import product1 from '../../../assets/product3.jpg'
import Entypo from 'react-native-vector-icons/Entypo';
const ProductCard = ({ item }) => {
    const nameShortener = (name) => {
        return name.length >= 32 ? name.slice(0, 42) + "..." : name
    }
    return (
        <TouchableWithoutFeedback>
            <View style={styles.card}>
                <View>
                    <View >
                        <Image source={item.image} style={styles.image} />
                    </View>
                    <View style={styles.divider} />
                    <Text style={styles.productName}>{nameShortener(item.productName)}</Text>
                    <Text style={styles.price}>$9.99</Text>
                    <Text style={styles.qtyText}>Qty:400</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default ProductCard