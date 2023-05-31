import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'

const DashboardCard = ({ ammount, description, sign }) => {
    return (
        <View style={styles.card}>
            <View style={styles.dollarNumberHolder}>
                {
                    sign && (
                        <Text style={styles.dollarSign}>$</Text>
                    )
                }
                <Text style={styles.dollarNumber}>{ammount}</Text>
            </View>
            <View>
                <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

export default DashboardCard