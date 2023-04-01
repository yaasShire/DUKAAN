import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Product3 from '../../../assets/product3.jpg'

const Product = ({ item }) => {
    return (
        <View style={styles.product}>
            <View style={styles.productImageNameHolder}>
                <View>
                    <Image source={item.image} style={styles.productImage} />
                </View>
                <View>
                    <Text style={styles.productName}>Gasoline</Text>
                </View>
            </View>
            <View style={styles.qtyHolder}>
                <Text style={styles.qtyText}>Qty</Text>
                <Text>10</Text>
            </View>
            <View style={styles.ammountHolder}>
                <Text style={styles.ammountText}>Ammount</Text>
                <Text style={styles.priceText}>$50</Text>
            </View>
        </View>
    )
}

export default Product