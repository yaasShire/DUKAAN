import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import AddProductField from '../../../../components/atoms/addProductField'
const Offers = () => {
    return (
        <View style={styles.container}>
            <AddProductField label="Quantity" />
            <AddProductField label="Price" />
            <AddProductField label="Seller SKU" />

        </View>
    )
}

export default Offers