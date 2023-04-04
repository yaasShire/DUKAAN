import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductHeader = ({ navigation }) => {
    return (
        <View style={styles.headerHolder}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <View style={styles.titleHolder}>
                <Text style={styles.titleText}>Product Registration</Text>
            </View>

        </View>
    )
}

export default AddProductHeader