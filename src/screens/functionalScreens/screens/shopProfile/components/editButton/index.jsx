import { View, Text } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'
import styles from './style'
const EditShopButton = ({ navigation, shop }) => {
    return (
        <FAB
            icon="pen"
            color='#fff'
            style={styles.fab}
            onPress={() => {
                navigation.navigate('editShopDetails', { shop })
            }}
        />
    )
}

export default EditShopButton