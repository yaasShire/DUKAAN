import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
const FilterButton = ({ mainLabel, navigation, tab }) => {
    return (
        <TouchableOpacity style={styles.filterButton} onPress={() => navigation.navigate("mainFilter", { target: tab })}>
            <View>
                <Text style={styles.filterName}>{mainLabel}</Text>
                <Text style={styles.modeText}>All</Text>
            </View>
            <Ionicons name='chevron-down-sharp' style={styles.downArrow} size={25} />
        </TouchableOpacity>
    )
}

export default FilterButton