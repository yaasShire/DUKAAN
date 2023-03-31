import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchSelecDropDownCard from '../../atoms/searchSelectCard';
const CategoriesFilterSectionContent = ({ categories }) => {
    return (
        <>
            <View style={styles.searchHolder}>
                <Ionicons name='ios-search-outline' size={15} color={'gray'} />
                <TextInput placeholder='search' style={styles.input} />
            </View>
            <ScrollView>
                {
                    categories.map(item => (
                        <SearchSelecDropDownCard key={item.id} item={item} />
                    ))
                }
            </ScrollView>
        </>
    )
}

export default CategoriesFilterSectionContent