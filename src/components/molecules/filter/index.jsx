import { View, Text, Pressable } from 'react-native'
import React from 'react'
import FilterButton from '../../atoms/filterButton'
import styles from './style'
import { Feather } from '@expo/vector-icons'
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
            {/* {
                tabs.map(tab => (
                    <FilterButton key={tab.id} mainLabel={tab.name} tab={tab} navigation={navigation} />
                ))
            } */}
            <Pressable style={styles.filterWrapper} onPress={() => navigation.navigate("mainFilter", { target: "" })}>
                <Feather name='filter' size={24} color={"#fff"} />
            </Pressable>

        </View>
    )
}

export default Filter