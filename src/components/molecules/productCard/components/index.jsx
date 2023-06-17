import { View, Text } from 'react-native'
import React from 'react'
import { FAB } from 'react-native-paper'
import styles from './style'
const ProductCardButton = ({ icon = "", onpress = () => { } }) => {
    return (
        <FAB
            // color='#fff'
            icon={icon}
            style={styles.btn}
            onPress={onpress}
        />
    )
}

export default ProductCardButton