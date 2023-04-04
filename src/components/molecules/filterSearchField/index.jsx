import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
const FilterSearchField = () => {
    return (
        <View style={styles.searchHolder}>
            <Ionicons name='ios-search-outline' size={15} color={'gray'} />
            <TextInput placeholder='search' style={styles.input} />
        </View>
    )
}

export default FilterSearchField