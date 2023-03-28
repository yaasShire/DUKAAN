import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Order from '../../../../components/molecules/order'
import styles from './style'
const Completed = ({ navigation }) => {
    return (
        <ScrollView style={styles.cardHolder}>
            <Order status="completed" navigation={navigation} />
            <Order status="completed" navigation={navigation} />
            <Order status="completed" navigation={navigation} />
            <Order status="completed" navigation={navigation} />
            <Order status="completed" navigation={navigation} />
        </ScrollView>
    )
}

export default Completed