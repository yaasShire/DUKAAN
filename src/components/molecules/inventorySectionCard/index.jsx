import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import Entypo from 'react-native-vector-icons/Entypo';
import UpdateProductDetailCard from '../../atoms/updateProductDetailCard';
const InventorySectionCard = ({ navigation }) => {
    return (
        <View style={styles.actionCardsHolder}>
            <UpdateProductDetailCard title="Available" value="500" navigation={navigation} />
            <UpdateProductDetailCard title="Low price" value="8.00" navigation={navigation} />
            <UpdateProductDetailCard title="Discount" value="12.00" navigation={navigation} />
        </View>
    )
}

export default InventorySectionCard