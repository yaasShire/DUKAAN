import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import product1 from '../../../assets/images/product_png.png'
import Entypo from 'react-native-vector-icons/Entypo';
import { FAB } from 'react-native-paper';
import productImagePlaceHolder from '../../../assets/images/productImagePlaceHolder.jpg'
import { Button } from 'react-native-paper';
import ProductCardButton from './components';
import { nameShortner } from '../../../utils/utilityFunctions';
const ProductCard = ({ item, navigation }) => {

    return (
        <View style={styles.card}>
            <View style={styles.imageWrapper}>
                <Image source={item?.photo ? { uri: "https://sweyn.co.uk/storage/images/" + item?.photo } : productImagePlaceHolder} style={styles.image} />
            </View>
            <View style={styles.rightContentWrapper}>
                <View style={styles.namePriceWrapper}>
                    <Text style={styles.productName}>{nameShortner(item?.name, 16)}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.priceText}>${item?.price}</Text>
                    </View>
                </View>
                <View style={styles.stockWrapper}>
                    <Text style={styles.stockText}>stock:</Text>
                    <Text style={styles.stockValue}>200</Text>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text numberOfLines={3} style={styles.description}>{nameShortner(item?.description, 40)}</Text>
                </View>
                <View style={styles.actionsWrapper}>
                    <ProductCardButton icon="pen" onpress={() => navigation.navigate("updateProduct", { data: item })} />
                    <ProductCardButton icon="database" onpress={() => navigation.navigate("productDetails", { data: item })} />
                </View>
            </View>
        </View>
    )
}
export default ProductCard

