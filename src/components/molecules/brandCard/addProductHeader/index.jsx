import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductHeader = ({ navigation, label }) => {
    return (
        <View style={styles.headerHolder}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.titleHolder}>
                <Text style={styles.titleText}>{label}</Text>
            </View>

        </View>
    )
}

export default AddProductHeader