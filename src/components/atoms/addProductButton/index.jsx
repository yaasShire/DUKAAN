import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
const AddProductButton = ({ navigation }) => {
    return (
        <TouchableOpacity style={styles.wholeButtonHolder} onPress={() => navigation.navigate("addProduct")}>
            <View style={styles.buttonContainer}>
                <Text style={styles.addText}>ADD</Text>
            </View>
        </TouchableOpacity>
    )
}

export default AddProductButton