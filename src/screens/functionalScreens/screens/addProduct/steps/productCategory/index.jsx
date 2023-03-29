import { View, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import SingleCategoryCard from '../../../../../../components/atoms/singCategoryCard';
import { useSelector } from 'react-redux'
import AddProductActionButton from '../../../../../../components/atoms/addProductActionButton';


const ProductCategory = ({ category, title, index, setCurrentPosition }) => {
    const productCategory = useSelector((state) => state.productRegistration.productCategory)

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
                                        cat="productCategory"
                                        finalObject={productCategory}
                                    />
                                ))
                            }
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.actionButtonHolder}>
                <AddProductActionButton productCategory={productCategory} setCurrentPosition={setCurrentPosition} />
            </View>
        </View>
    )
}

export default ProductCategory