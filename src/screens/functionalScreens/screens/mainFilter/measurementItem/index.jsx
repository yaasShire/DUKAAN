import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
const MeasurementCategoryItem = ({ selectedItem, item, index, setSIndex, sIndex }) => {
    return (
        <TouchableWithoutFeedback onPress={() => setSIndex(index)}>
            <View style={[styles.categoriesItem, { backgroundColor: index == sIndex ? "#fff" : "#e1e6e2" }]}>
                <Text style={[styles.filterMeasurementText, { opacity: sIndex == index ? 1 : 0.5 }]}>{item.name}</Text>
                <Text style={styles.selectedCount}>0</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MeasurementCategoryItem