import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const DashboardCard = ({ ammount, description }) => {
    return (
        <View style={styles.card}>
            <View style={styles.contentHolder}>
                <View style={styles.dollarNumberHolder}>
                    <Text style={styles.dollarSign}>$</Text>
                    <Text style={styles.dollarNumber}>{ammount}</Text>
                </View>
                <View>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
        </View>
    )
}

export default DashboardCard