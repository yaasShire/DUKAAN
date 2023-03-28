import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Order from '../../../../components/molecules/order'
import styles from './style'
const NewOrderStage = ({ navigation }) => {
    return (
        <ScrollView style={styles.orderContainer}>
            <Order navigation={navigation} />
            <Order navigation={navigation} />
            <Order navigation={navigation} />
            <Order navigation={navigation} />
            <Order navigation={navigation} />
            <Order navigation={navigation} />
        </ScrollView>
    )
}

export default NewOrderStage