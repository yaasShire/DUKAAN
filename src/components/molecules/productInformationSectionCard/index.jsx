import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style'
import UpdateProductDetailCard from '../../atoms/updateProductDetailCard';
const ProductInformationSectionCard = ({ navigation, productDetail }) => {
    return (
        <View style={styles.actionCardsHolder}>
            <UpdateProductDetailCard productDetail={productDetail} name="name" title="Name" value={productDetail?.name} navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="description" title="Description" value={productDetail?.description} navigation={navigation} />
        </View>
    )
}

export default ProductInformationSectionCard