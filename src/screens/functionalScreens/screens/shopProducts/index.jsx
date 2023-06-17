import { View, Text } from 'react-native'
import React from 'react'
import styles from './style'
import { SafeAreaView } from 'react-native-safe-area-context'
const ShopProducts = () => {
    return (
        <View style={styles.container}>
            <SafeAreaView />
            <Text>ShopProducts</Text>
        </View>
    )
}

export default ShopProducts