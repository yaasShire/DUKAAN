import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import product1 from '../../../assets/images/product_png.png'
import Entypo from 'react-native-vector-icons/Entypo';
import { FAB } from 'react-native-paper';
import productImagePlaceHolder from '../../../assets/images/productImagePlaceHolder.jpg'
import { Button } from 'react-native-paper';
import ProductCardButton from './components';
import { nameShortner } from '../../../utils/utilityFunctions';
import { postData } from '../../../hooks/usePost';
import SwipeActionButton from '../swipeActionButton';
import Swipeable from 'react-native-swipeable';

const ProductCard = ({ item, navigation, fetchProducts }) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    // console.warn(shop);
    const nameShortener = (name) => {
        return name.length > 20 ? name.slice(0, 20) : name
    }

    const deleteProduct = async () => {
        setIsLoading(true)
        const formData = new FormData()
        formData.append("UPID", item?.UPID)
        const result = await postData("seller/products/delete", formData, setError, setIsLoading)
        console.log(result)
        fetchProducts()
    }

    const rightButtons = [
        <SwipeActionButton
            icon="delete"
            onPress={deleteProduct}
            bgColor={"#cc4129"}
        />,
    ];
    return (
        <Swipeable rightButtonWidth={92} rightButtons={rightButtons}>
            <View style={styles.card}>
                <View style={styles.imageWrapper}>
                    <Image source={item?.photo ? { uri: "https://api.elabis.app/storage/images/" + item?.photo } : productImagePlaceHolder} style={styles.image} />
                </View>
                <View style={styles.rightContentWrapper}>
                    <View style={styles.namePriceWrapper}>
                        <Text style={styles.productName}>{nameShortner(item?.name, 16)}</Text>
                        <View style={styles.priceWrapper}>
                            <Text style={styles.priceText}>${item?.price}</Text>
                        </View>
                    </View>
                    {/* <View style={styles.stockWrapper}>
                    <Text style={styles.stockText}>stock:</Text>
                    <Text style={styles.stockValue}>200</Text>
                </View> */}
                    <View style={styles.descriptionWrapper}>
                        <Text numberOfLines={3} style={styles.description}>{nameShortner(item?.description, 40)}</Text>
                    </View>
                    <View style={styles.actionsWrapper}>
                        <ProductCardButton icon="pen" onpress={() => navigation.navigate("updateProduct", { data: item })} />
                        <ProductCardButton icon="database" onpress={() => navigation.navigate("productDetails", { data: item })} />
                    </View>
                </View>
            </View>
        </Swipeable>
    )
}
export default ProductCard

