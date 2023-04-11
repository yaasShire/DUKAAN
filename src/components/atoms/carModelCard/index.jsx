import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import superCar1 from '../../../assets/supercar1.png'
const CarModelCard = ({ car, setSelectedCar, selectedCar }) => {

    return (
        <TouchableWithoutFeedback onPress={() => {
            setSelectedCar(prev => car)
        }}>
            <View style={[selectedCar.id == car.id ? styles.selectedCar : styles.cardWrapper]}>
                <Image source={car.image} style={styles.image} />
                <Text>{car.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}
export default CarModelCard