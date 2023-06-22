import { View, Image } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import styles from './style'
import NoShopsImage from '../../../../../../assets/images/notFound.png'
const NoBrand = () => {
    return (
        <View style={styles.container}>
            <Image source={NoShopsImage} style={styles.image} />
            <Text>No brand</Text>
        </View>
    )
}

export default NoBrand