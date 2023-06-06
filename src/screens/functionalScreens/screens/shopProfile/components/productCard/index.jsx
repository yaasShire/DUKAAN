import { View, Text } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import styles from './style'
const ProductCard = ({ item }) => {
    return (
        <View style={styles.card}>
            <View style={styles.producImageWrapper}>
                <Image source={{ uri: "https://sweyn.co.uk/storage/images/" + item?.photo }} style={styles.image} />
            </View>
            <View style={styles.dataWrapper}>
                <Text style={styles.productName}>{item?.name}</Text>
                <Text style={styles.qty}>Qty:{item?.quantity_avaliable}</Text>
            </View>
        </View>
    )
}

export default ProductCard