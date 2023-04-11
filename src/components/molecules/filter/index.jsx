import { View, Text } from 'react-native'
import React from 'react'
import FilterButton from '../../atoms/filterButton'
import styles from './style'
const Filter = ({ navigation }) => {
    tabs = [
        {
            id: 1,
            name: "Categories"
        },
        {
            id: 2,
            name: "Brands"
        },
        {
            id: 3,
            name: "Car model"
        },
        {
            id: 4,
            name: "Shops"
        },
    ]
    return (
        <View style={styles.filterContainer}>
            {
                tabs.map(tab => (
                    <FilterButton key={tab.id} mainLabel={tab.name} tab={tab} navigation={navigation} />
                ))
            }

        </View>
    )
}

export default Filter