import { View, Text, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
const MeasurementCategoryItem = ({ setCurrentContent, item, id, setSIndex, sIndex, selectedId, setSelectedId, targetTab }) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            setSelectedId(item.id)
            setCurrentContent(item.name)
        }}>
            <View style={[styles.categoriesItem, { backgroundColor: id == selectedId ? "#fff" : "#e1e6e2" }]}>
                <Text style={[styles.filterMeasurementText, { opacity: selectedId == id ? 1 : 0.5 }]}>{item.name}</Text>
                <Text style={styles.selectedCount}>0</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MeasurementCategoryItem