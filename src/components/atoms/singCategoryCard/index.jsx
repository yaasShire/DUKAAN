import { View, Text, TouchableOpacity } from 'react-native'
import React, { useMemo } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux'
import { setMainCategory, setProductCategory, setSubCategory } from '../../../redux/products';

import styles from './style'
const SingleCategoryCard = ({ category, cat, finalObject }) => {
    const dispatch = useDispatch()
    return (
        <View>

            <TouchableOpacity style={[styles.categoryButtonHolder, { backgroundColor: finalObject.id == category.id ? "#D9D9D9" : "#FFF" }]} onPress={() => {
                cat == 'mainCategory' ? dispatch(setMainCategory(category)) : cat == 'subCategory' ? dispatch(setSubCategory(category)) : cat == 'productCategory' ? dispatch(setProductCategory(category)) : ""
            }}>
                <Text style={styles.categoryName}>{category.name}</Text>
                <Ionicons name='chevron-forward-outline' size={25} color="#9D9B9B" />
            </TouchableOpacity>
        </View>
    )
}

export default SingleCategoryCard