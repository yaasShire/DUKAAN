import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
const SubCategory = ({ category, title, index }) => {
    const subCategory = useSelector((state) => state.productRegistration.subCategory)

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.textTitle}>{title}</Text>
            <View style={styles.categoriesHolder}>
                <View>
                    <ScrollView style={{}}>
                        {
                            category.map((category, index) => (
                                <SingleCategoryCard key={category.id} category={category}
                                    cat="subCategory"
                                    finalObject={subCategory}
                                />
                            ))
                        }
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    )
}

export default SubCategory