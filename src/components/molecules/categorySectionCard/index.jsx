import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style'
import UpdateProductDetailCard from '../../atoms/updateProductDetailCard';
const CategorySectionCard = ({ navigation, productDetail }) => {
    console.log(productDetail);
    return (
        <View style={styles.actionCardsHolder}>
            <UpdateProductDetailCard productDetail={productDetail} name="category" title="Category" value="$0" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="subcategory" title="Subcategory" value="$8.00" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="productcategory" title="Product category" value="$8.00" navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="brand" title="Brand" value="$8.00" navigation={navigation} />
        </View>
    )
}

export default CategorySectionCard