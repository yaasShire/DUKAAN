import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import styles from './style'
import { Divider } from 'react-native-paper'
import { nameShortner } from '../../../utils/utilityFunctions'
const ProductSmallCard = ({ product, navigation }) => {
    return (
        <Pressable style={styles.container} onpress={() => navigation.navigate("productDetails", { data: product })}>
            <Image source={{ uri: `https://sweyn.co.uk/storage/images/${product?.photo}` }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.productName}>{nameShortner(product?.name, 13)}</Text>
                <View style={styles.sectionWrapper}>
                    <Text style={styles.title}>Brand:</Text>
                    <Text style={styles.value}>{product?.brand?.name || 'No brand'}</Text>
                </View>
                <View style={styles.sectionWrapper}>
                    <Text style={styles.title}>Quantity:</Text>
                    <Text style={styles.value}>{product?.quantity_avaliable}</Text>
                </View>
                <Divider />
                <View style={styles.priceWrapper}>
                    <Text style={styles.priceText}>${product?.price}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ProductSmallCard