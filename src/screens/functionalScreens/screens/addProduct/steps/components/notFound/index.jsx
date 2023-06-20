import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style'
import NoDataImage from '../../../../../../../assets/images/notFound.png'
const NotFound = () => {
    return (
        <View style={styles.noCategory}>
            <Text style={styles.notFoundText}>No sub category found</Text>
            <Image source={NoDataImage} style={styles.image} />
        </View>
    )
}

export default NotFound