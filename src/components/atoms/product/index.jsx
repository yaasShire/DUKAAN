import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Product3 from '../../../assets/product3.jpg'
import { nameShortner } from '../../../utils/utilityFunctions'

const Product = ({ item }) => {
    return (
        <View style={styles.product}>
            <View style={styles.productImageNameHolder}>
                <View>
                    <Image source={item.image} style={styles.productImage} />
                </View>
                <View>
                    <Text style={styles.productName}>{nameShortner(item.name)}</Text>
                </View>
            </View>
            <View style={styles.qtyHolder}>
                <Text style={styles.qtyText}>Qty</Text>
                <Text style={styles.qtyQuantity} numberOfLines={1}>{item.quantity}</Text>
            </View>
            <View style={styles.ammountHolder}>
                <Text style={styles.ammountText}>Ammount</Text>
                <Text style={styles.priceText}>${item.ammount}</Text>
            </View>
        </View>
    )
}

export default Product