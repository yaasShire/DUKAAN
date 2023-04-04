import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchSelecDropDownCard from '../../atoms/searchSelectCard';
import FilterSearchField from '../filterSearchField';
const CategoriesFilterSectionContent = ({ categories }) => {
    return (
        <View style={styles.container}>
            <FilterSearchField />
            <ScrollView>
                {
                    categories.map(item => (
                        <SearchSelecDropDownCard key={item.id} item={item} />
                    ))
                }
            </ScrollView>
        </View>
    )
}
export default CategoriesFilterSectionContent