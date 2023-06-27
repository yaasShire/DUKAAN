import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import ModalComponent from '../../molecules/modal'
import check from '../../../assets/check.png'
const DecisionButton = ({ title, onPress = () => { } }) => {

    return (
        <TouchableOpacity style={styles.buttonHolder} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default DecisionButton