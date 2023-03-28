import { View, Text } from 'react-native'
import React from 'react'
import FilterButton from '../../atoms/filterButton'
import styles from './style'
const Filter = ({ navigation }) => {
    return (
        <View style={styles.filterContainer}>
            <FilterButton mainLabel="Category" navigation={navigation} />
            <FilterButton mainLabel="Sub category" navigation={navigation} />
            <FilterButton mainLabel="P Category" navigation={navigation} />
        </View>
    )
}

export default Filter