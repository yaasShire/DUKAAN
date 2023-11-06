import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { Image } from 'react-native'
import { nameShortner } from '../../../../../../utils/utilityFunctions'
const Products = ({ order = {} }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imaegNameWrapper}>
                <Image source={{ uri: `https://api.elabis.app/storage/images/${order?.photo}` }} style={styles.image} />
                <Text style={{ marginLeft: 5 }}>{nameShortner(order?.name, 14)}</Text>
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