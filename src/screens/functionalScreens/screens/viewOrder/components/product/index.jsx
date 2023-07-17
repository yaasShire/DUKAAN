import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Image } from 'react-native'
const Products = ({ order = {} }) => {
    console.log(order)
    return (
        <View style={styles.container}>
            <View style={styles.imaegNameWrapper}>
                <Image source={require('../../../../../../assets/images/mechanic1.jpg')} style={styles.image} />
                <Text>Product</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.fieldTitle}>Quantity</Text>
                <Text style={styles.fieldValue}>{order?.quantity}</Text>
            </View>
            <View style={styles.field}>
                <Text style={styles.fieldTitle}>Ammount</Text>
                <Text style={styles.fieldValue}>${order?.amount}</Text>
            </View>
        </View>
    )
}

export default Products