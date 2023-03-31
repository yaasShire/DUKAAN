import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductHeader = () => {
    return (
        <View style={styles.headerHolder}>
            <TouchableOpacity>
                <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
            <Text>
                <Text style={styles.titleText}>Category</Text>
            </Text>
            <TouchableOpacity>
                <Text style={styles.nextText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddProductHeader