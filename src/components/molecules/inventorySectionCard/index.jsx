import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import UpdateProductDetailCard from '../../atoms/updateProductDetailCard';
const InventorySectionCard = () => {
    return (
        <View style={styles.actionCardsHolder}>
            <UpdateProductDetailCard title="Available" value="500" />
            <UpdateProductDetailCard title="Low price" value="8.00" />
            <UpdateProductDetailCard title="Discount" value="12.00" />
        </View>
    )
}

export default InventorySectionCard