import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';
const MainCategory = ({ category, title, setCurrentPosition }) => {
    const mainCategory = useSelector((state) => state.productRegistration.mainCategory)
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.textTitle}>{title}</Text>
                <View style={styles.categoriesHolder}>
                    <View>
                        <ScrollView style={{}}>
                            {
                                category.map((category, index) => (
                                    <SingleCategoryCard key={category.id} category={category}
                                        cat="mainCategory"
                                        finalObject={mainCategory}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.actionButtonHolder}>
                <AddProductActionButton setCurrentPosition={setCurrentPosition} />
            </View>
        </View>
    )
}
export default MainCategory