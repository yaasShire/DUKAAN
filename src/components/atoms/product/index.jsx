import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import Product3 from '../../../assets/product3.jpg'
import { nameShortner } from '../../../utils/utilityFunctions'

const Product = ({ order }) => {
    return (
        <View style={styles.product}>
            <View style={styles.productImageNameHolder}>
                <View style={styles.imageWrapper}>
                    <Image source={{ uri: "https://sweyn.co.uk/storage/images/" + order?.photo }} style={styles.productImage} />
                </View>
                <View>
                    <Text style={styles.productName}>{nameShortner(order?.name, 16)}</Text>
                </View>
            </View>
            <View style={styles.qtyHolder}>
                <Text style={styles.qtyText}>Qty</Text>
                <Text style={styles.qtyQuantity} numberOfLines={1}>{order?.quantity}</Text>
            </View>
            <View style={styles.ammountHolder}>
                <Text style={styles.ammountText}>Ammount</Text>
                <Text style={styles.priceText}>${order?.amount}</Text>
            </View>
        </View>
    )
}

export default Product