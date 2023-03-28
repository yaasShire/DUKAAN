import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Order from '../../../../components/molecules/order'
import styles from './style'
const OnProcess = ({ navigation }) => {
    return (
        <ScrollView style={styles.onProcessOrders}>
            <Order status="Pending" navigation={navigation} />
            <Order status="delivered" navigation={navigation} />
            <Order status="shipped" navigation={navigation} />
            <Order status="Pending" navigation={navigation} />
            <Order status="shipped" navigation={navigation} />
            <Order status="Pending" navigation={navigation} />
        </ScrollView>
    )
}

export default OnProcess