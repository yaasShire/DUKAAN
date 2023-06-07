import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style'
import UpdateProductDetailCard from '../../atoms/updateProductDetailCard';
const CategorySectionCard = ({ navigation, productDetail }) => {
    console.warn(productDetail);
    return (
        <View style={styles.actionCardsHolder}>
            <UpdateProductDetailCard productDetail={productDetail} name="Total Sales" title="Category" value="$0" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="price" title="Subcategory" value="$8.00" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="price" title="Product category" value="$8.00" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="price" title="Brand" value="$8.00" navigation={navigation} />
        </View>
    )
}

export default CategorySectionCard