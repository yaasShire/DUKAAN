import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './style'
import UpdateProductDetailCard from '../../atoms/updateProductDetailCard';
const PricingSectionCard = ({ navigation }) => {
    return (
        <View style={styles.actionCardsHolder}>
            <UpdateProductDetailCard title="Price price" value="$12.00" navigation={navigation} />
            <UpdateProductDetailCard title="Low price" value="$8.00" navigation={navigation} />
            <UpdateProductDetailCard title="Discount" value="$12.00" navigation={navigation} />
        </View>
    )
}

export default PricingSectionCard