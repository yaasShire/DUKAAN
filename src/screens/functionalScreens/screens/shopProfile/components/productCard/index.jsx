import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { Divider } from 'react-native-paper'
import { nameShortner } from '../../../../../../utils/utilityFunctions'
const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: `https://sweyn.co.uk/storage/images/${product?.photo}` }} style={styles.image} />
            <View>
                <Text style={styles.productName}>{nameShortner(product?.name)}</Text>
                <View style={styles.qtyHolder}>
                    <Text style={styles.qtyText}>Qty:</Text>
                    <Text style={styles.qtyValue}>{product?.quantity_avaliable}</Text>
                </View>
            </View>
        </View>
    )
}

export default ProductCard