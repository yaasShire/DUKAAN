import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Lambo from '../../../assets/lambo.png'
const BrandCard = ({ brand }) => {
    return (
        <TouchableOpacity style={styles.wholeButtonHolder}>
            <View style={styles.cardHolder}>
                <Image source={brand.image} style={styles.image} />
            </View>
            <Text style={styles.brandName}>{brand.name}</Text>
        </TouchableOpacity>
    )
}

export default BrandCard