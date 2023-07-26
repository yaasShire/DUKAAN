import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import UpdateProductDetailCard from '../../atoms/updateProductDetailCard';
import CategoryUpdateDropdownList from '../categoryUpdateDropdownList';
const InventorySectionCard = ({ navigation, productDetail = {} }) => {
    return (
        <View style={styles.actionCardsHolder}>
            <UpdateProductDetailCard productDetail={productDetail} name="price" title="Price price" value={productDetail?.price} navigation={navigation} />
            <UpdateProductDetailCard productDetail={productDetail} name="quantity_avaliable" title="Available" value={productDetail?.quantity_avaliable} navigation={navigation} />
        </View>
    )
}

export default InventorySectionCard