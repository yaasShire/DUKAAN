import { View, Text, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';

const FilterHeader = ({ navigation }) => {
    return (
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
            <View style={styles.filterHeader}>
                <Ionicons name='close-outline' size={32} />
                <Text style={styles.filterText}>Filters</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default FilterHeader